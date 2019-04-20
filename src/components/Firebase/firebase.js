import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAMUJO14mGxX62TsuaNAboSPZiyXiprGz0',
	authDomain: 'nofixedabode-39b50.firebaseapp.com',
	databaseURL: 'https://nofixedabode-39b50.firebaseio.com',
	projectId: 'nofixedabode-39b50',
	storageBucket: 'nofixedabode-39b50.appspot.com',
	messagingSenderId: '1043625537979',
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		this.auth = app.auth();
	}

	registerUserWithEmailAndPassword = (email, password) => {
		return this.auth.createUserWithEmailAndPassword(email, password);
	}

	loginUserWithEmailAndPassword = (email, password) => {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	logout = () => {
		return this.auth.signOut();
	};

	sendPasswordResetEmail = (email) => {
		return this.auth.sendPasswordResetEmail(email);
	};

	updateCurrentUsersPassword = (password) => {
		return this.auth.updateCurrentUsersPassword(password);
	}
}

export default Firebase;
