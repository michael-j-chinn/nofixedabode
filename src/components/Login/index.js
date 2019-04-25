import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { RegistrationLink } from '../Register';
import { PasswordForgetLink } from '../PasswordForget';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const LoginPage = () => (
  <div>
    <h1>Login</h1>
    <LoginForm />
    <PasswordForgetLink />
    <RegistrationLink />
  </div>
);

const LoginLink = () => (
  <p>Already have an account? <Link to={ROUTES.LOGIN}>Login</Link></p>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class LoginFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.firebase
      .loginUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = email === '' || password === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={this.onChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={this.onChange}
        />
        <button type="submit" disabled={isInvalid}>Login</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  };
}

const LoginForm = compose(
  withRouter,
  withFirebase,
)(LoginFormBase);

export default LoginPage;

export { LoginForm, LoginLink };