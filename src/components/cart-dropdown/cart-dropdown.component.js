import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from './../../redux';
import { CartItem } from '../cart-item';
import { CustomButton } from '../custom-button';
import './cart-dropdown.styles.scss';

const CartDropdownComponent = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export const CartDropdown = connect(mapStateToProps)(CartDropdownComponent);
