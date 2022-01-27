import React from 'react';
import { SignIn, SignUp } from '../../components';
import './authenticate.styles.scss';

export const Authenticate = () => (
  <div className="authenticate">
    <SignIn />
    <SignUp />
  </div>
);
