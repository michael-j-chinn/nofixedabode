/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { LoginLink } from '../Login';

const RegistrationPage = () => (
  <div>
    <h1>Register</h1>
    <RegistrationForm />
    <LoginLink />
  </div>
);

const RegistrationLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.REGISTER}>Register</Link>
  </p>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class RegistrationFormBase extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, passwordOne } = this.state;

    this.props.firebase
      .registerUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({...INITIAL_STATE});
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input 
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input 
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input 
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit" disabled={isInvalid}>Register</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const RegistrationForm = compose(
  withRouter,
  withFirebase,
)(RegistrationFormBase);

export default RegistrationPage;

export { RegistrationForm, RegistrationLink };
