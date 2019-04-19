import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Login = () => (
  <div>
    <h1>Login</h1>
    <form>
      <input
        name="email"
        placeholder="Email"
        type="text"
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
      />
      <button type="submit">Login</button>
    </form>
    <p>
      Don't have an account yet? <Link to={ROUTES.REGISTER}>Register</Link> here!
    </p>
  </div>
);

export default Login;