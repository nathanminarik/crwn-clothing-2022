import React from 'react';
import { connect } from 'react-redux';
import './collection.styles.scss';
import { CollectionItem } from './../../components';
import { selectCollection } from './../../redux';

const CollectionPageComponent = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export const CollectionPage = connect(mapStateToProps)(CollectionPageComponent);
