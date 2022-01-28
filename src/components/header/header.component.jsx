import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from './../../firebase';
import { selectCartHidden, selectCurrentUser } from './../../redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { CartDropdown, CartIcon } from '..';
import './header.styles.scss';

const HeaderComponent = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/authenticate" className="option">
          SIGN IN
        </Link>
      )}
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export const Header = connect(mapStateToProps)(HeaderComponent);
