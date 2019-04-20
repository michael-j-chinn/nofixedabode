import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import { PasswordChangeForm } from '../PasswordChange';
import { withAuthorization, AuthenticationContext } from '../Session';

const AccountPage = () => (
	<AuthenticationContext.Consumer>
		{authedUser =>
			<div>
				<h1>Account Management: {authedUser.email}</h1>
				<PasswordForgetForm />
				<PasswordChangeForm />
			</div>
		}
	</AuthenticationContext.Consumer>
);

const authorizationCondition = authedUser => !!authedUser;

export default withAuthorization(authorizationCondition)(AccountPage);
