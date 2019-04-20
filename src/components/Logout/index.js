import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';

class LogoutButtonBase extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick = event => {
		event.preventDefault();
		this.props.firebase.logout();
		this.props.history.push(ROUTES.LOGIN);
	};

	render() {
		return (
			<button type="button" onClick={this.onClick}>
				Logout
			</button>
		);
	}
};

const LogoutButton = compose(
	withRouter,
	withFirebase,
)(LogoutButtonBase);

export default LogoutButton;