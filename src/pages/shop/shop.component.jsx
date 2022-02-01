import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { CollectionsOverview, WithSpinner } from './../../components';
import {
  firestore,
  convertCollectionsSnapshotToObject,
} from './../../firebase';
import { updateCollections } from './../../redux';
import { CollectionPage } from './../collection';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPageComponent extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    // Fetch method
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crown-db-63582/databases/(default)/documents/collections'
    // )
    //   .then((res) => res.json())
    //   .then((collections) => console.log(collections));

    // Promise method
    collectionRef.get().then(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToObject(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // Obeservable method using firestore
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToObject(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispactToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export const ShopPage = connect(null, mapDispactToProps)(ShopPageComponent);
