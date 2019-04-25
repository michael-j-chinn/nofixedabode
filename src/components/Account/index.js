import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import { PasswordChangeForm } from '../PasswordChange';
import { withAuthorization, AuthenticationContext } from '../Session';
import { GrantAdminClaimForm } from '../Admin';

const AccountPage = () => (
	<AuthenticationContext.Consumer>
		{authedUser =>
			<div>
				<h1>Account Management: {authedUser.email}</h1>
				<PasswordForgetForm />
				<PasswordChangeForm />
				{ authedUser.claims.admin ? <GrantAdminClaimForm /> : null }
			</div>
		}
	</AuthenticationContext.Consumer>
);

const authorizationCondition = authedUser => !!authedUser;

export default withAuthorization(authorizationCondition)(AccountPage);
