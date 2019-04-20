import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';
import LoginPage from '../Login';
import RegistrationPage from '../Register';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AboutPage from '../About';
import GetHelpPage from '../GetHelp';
import GiveHelpPage from '../GiveHelp';
import EventsPage from '../Events';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LoginPage} />
      <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.REGISTER} component={RegistrationPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.GET_HELP} component={GetHelpPage} />
      <Route path={ROUTES.GIVE_HELP} component={GiveHelpPage} />
      <Route path={ROUTES.EVENTS} component={EventsPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
