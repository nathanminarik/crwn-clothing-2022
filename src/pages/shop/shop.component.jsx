import React from 'react';
import { Route } from 'react-router-dom';
import { CollectionsOverview } from '../../components';
import { CollectionPage } from './../collection';

const ShopPageComponent = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export const ShopPage = ShopPageComponent;
