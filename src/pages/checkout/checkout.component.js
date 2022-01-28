import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CheckoutItem, StripeCheckoutButton } from '../../components';
import { selectCartItems, selectCartTotal } from '../../redux';
import './checkout.styles.scss';

const CheckoutPageComponent = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    <div className="test-warning">
      *Please use the following test card
      <br />
      4242 4242 4242 4242 - Any future date - Any 3 digits for CSV
    </div>
    <StripeCheckoutButton total={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export const CheckoutPage = connect(mapStateToProps)(CheckoutPageComponent);
