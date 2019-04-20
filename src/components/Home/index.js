import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (
	<div>
	  <h1>Home</h1>
	</div>
);

const authorizationCondition = authedUser => !!authedUser;

export default withAuthorization(authorizationCondition)(HomePage);