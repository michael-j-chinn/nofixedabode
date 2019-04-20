import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import LogoutButton from '../Logout';
import { AuthenticationContext } from '../Session';

const NavigationNonAuthedUser = () => (
  <Link to={ROUTES.LOGIN}>Login</Link>
);

const NavigationAuthedUser = () => (
  <LogoutButton />
);

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to={ROUTES.HOME}>Home</Link></li>
      <li><Link to={ROUTES.ABOUT}>About</Link></li>
      <li><Link to={ROUTES.GET_HELP}>Get Help</Link></li>
      <li><Link to={ROUTES.GIVE_HELP}>Give Help</Link></li>
      <li><Link to={ROUTES.EVENTS}>Events</Link></li>
      <li>
      <AuthenticationContext.Consumer>
        {authedUser => authedUser ? <NavigationAuthedUser /> : <NavigationNonAuthedUser />}
      </AuthenticationContext.Consumer>
      </li>
    </ul>
  </nav>
);

export default Navigation;
