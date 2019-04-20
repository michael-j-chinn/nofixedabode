import React from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import AuthorizationContext from './context';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';

const withAuthorization = condition => Component => {
	class WithAuthorization extends React.Component {

		componentDidMount() {
			this.listener = this.props.firebase.auth
				.onAuthStateChanged(authedUser => {
					if (!condition(authedUser)) {
						this.props.history.push(ROUTES.LOGIN);
					}
				});
		}

		componentWillUnmount() {
			this.listener();
		}

		render() {
			return (
				<AuthorizationContext.Consumer>
					{authedUser =>
						condition(authedUser) ? <Component {...this.props} /> : null
					}
				</AuthorizationContext.Consumer>
			);
		}
	}

	return compose(
		withRouter,
		withFirebase,
	)(WithAuthorization);
};

export default withAuthorization;
