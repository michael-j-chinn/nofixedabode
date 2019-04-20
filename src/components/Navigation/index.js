import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import LogoutButton from '../Logout';
import { AuthenticationContext } from '../Session';

const NavigationNonAuthedUser = () => (
  <ul>
    <li><Link to={ROUTES.LOGIN}>Login</Link></li>
  </ul>
);

const NavigationAuthedUser = () => (
  <ul>
    <li><Link to={ROUTES.HOME}>Home</Link></li>
    <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
    <li><LogoutButton /></li>
  </ul>
);

const Navigation = () => (
  <nav>
    <AuthenticationContext.Consumer>
      {authedUser => authedUser ? <NavigationAuthedUser /> : <NavigationNonAuthedUser />}
    </AuthenticationContext.Consumer>
  </nav>
);

export default Navigation;
