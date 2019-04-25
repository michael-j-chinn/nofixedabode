import React, { Component } from 'react';
import * as CLAIMS from '../../constants/claims';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
	email: '',
	error: null
}

const AdminToolsPage = () => (
	<div>
		<h1>Admin Tools</h1>
		<GrantAdminClaimForm />
	</div>
);

class GrantAdminClaimFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit = event => {
		event.preventDefault();

		const { email } = this.state;
		const claimsToSet = {
			[CLAIMS.ADMIN]: true
		};

		this.props.firebase.setUserClaimsByEmail(email, claimsToSet)
			.then(() => {
				this.setState({ ...INITIAL_STATE });
			})
			.catch(error => {
				this.setState({ error });
			});
	};

	onChange = event => {
		event.preventDefault();

		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		const { email, error } = this.state;

		const isInvalid = email === '';

		return (
			<form onSubmit={this.onSubmit}>
				<input
					type="text"
					name="email"
					placeholder="Email"
					value={email}
					onChange={this.onChange}
				/>
				<button type="submit" disabled={isInvalid}>Grant Admin Powers!</button>

				{error && <p>{error.message}</p>}
			</form>
		);
	}
};

const GrantAdminClaimForm = withFirebase(GrantAdminClaimFormBase);

export default AdminToolsPage;

export { GrantAdminClaimForm };
