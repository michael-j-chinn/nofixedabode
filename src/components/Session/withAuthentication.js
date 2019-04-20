import React from 'react';
import { withFirebase } from '../Firebase';
import AuthenticationContext from './context';

const withAuthentication = Component => {
	class WithAuthentication extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				authedUser: null
			};
		}

		componentDidMount() {
			this.listener = this.props.firebase.auth
				.onAuthStateChanged(authedUser => {
					authedUser
						? this.setState({ authedUser })
						: this.setState({ authedUser: null });
				});
		}

		componentWillUnmount() {
			this.listener();
		}

		render() {
			return (
				<AuthenticationContext.Provider value={this.state.authedUser}>
					<Component {...this.props} />
				</AuthenticationContext.Provider>
			);
		}
	}

	return withFirebase(WithAuthentication);
};

export default withAuthentication;