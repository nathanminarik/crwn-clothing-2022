import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from './../../redux';
import { CollectionPreview } from './../collection-preview';
import './collections-overview.styles.scss';

const CollectionsOverviewComponent = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export const CollectionsOverview = connect(mapStateToProps)(
  CollectionsOverviewComponent
);
