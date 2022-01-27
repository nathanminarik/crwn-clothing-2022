import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components';
import { Authenticate, HomePage, ShopPage } from './pages';
import { auth, createUserProfileDocument } from './firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/authenticate" component={Authenticate} />
        </Switch>
      </div>
    );
  }
}
export default App;
