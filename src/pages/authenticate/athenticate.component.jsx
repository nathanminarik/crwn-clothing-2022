import React from 'react';
import { SignIn, SignUp } from '../../components';
import './authenticate.styles.scss';

export const AuthenticatePage = () => (
  <div className="authenticate">
    <SignIn />
    <SignUp />
  </div>
);
