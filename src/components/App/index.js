import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';
import LoginPage from '../Login';
import RegistrationPage from '../Register';
import HomePage from '../Home';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LoginPage} />
      <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.REGISTER} component={RegistrationPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
);

export default App;
