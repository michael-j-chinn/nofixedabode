import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

const PasswordForgetPage = () => (
  <div>
    <h1>Reset Password</h1>
    <PasswordForgetForm />
  </div>
);

const PasswordForgetLink = () => (
  <p>
    Forgot your password? <Link to={ROUTES.PASSWORD_FORGET}>Reset Password</Link>
  </p>
);

const INITIAL_STATE = {
  email: '',
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;

    this.props.firebase
      .sendPasswordResetEmail(email)
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push(ROUTES.LOGIN);
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
      email,
      error
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button type="submit" disabled={isInvalid}>Reset My Password</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetForm = compose(
  withRouter,
  withFirebase,
)(PasswordForgetFormBase);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
