import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components';
import { HomePage, ShopPage } from './pages';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
