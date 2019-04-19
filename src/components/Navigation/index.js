import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <nav>
    <Link to={ROUTES.LOGIN}>Login</Link>
  </nav>
);

export default Navigation;
