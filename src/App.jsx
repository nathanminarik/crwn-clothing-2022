import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.scss';
import { Header } from './components';
import { AuthenticatePage, CheckoutPage, HomePage, ShopPage } from './pages';
import { auth, createUserProfileDocument } from './firebase';
import { selectCurrentUser, setCurrentUser } from './redux';

class App extends React.Component {
  unsubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data(),
            },
            () => console.log(this.state)
          );
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/authenticate"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <AuthenticatePage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
