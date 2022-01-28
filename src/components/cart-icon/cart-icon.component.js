import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden, selectCartItemsCount } from '../../redux';
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIconComponent = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) =>
  createStructuredSelector({
    itemCount: selectCartItemsCount,
  });

export const CartIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIconComponent);
