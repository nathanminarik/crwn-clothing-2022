import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../../redux';
import './collection-item.styles.scss';
import { CustomButton } from '..';

export const CollectionItemComponent = ({ addItem, item }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export const CollectionItem = connect(
  null,
  mapDispatchToProps
)(CollectionItemComponent);
