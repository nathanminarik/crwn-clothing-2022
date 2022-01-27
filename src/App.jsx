import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components';
import { Authenticate, HomePage, ShopPage } from './pages';
import { auth } from './firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
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
