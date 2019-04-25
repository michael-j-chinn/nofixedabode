import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';

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
		this.db = app.database();
		this.functions = app.functions();
	}

	//Auth API
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
		return this.auth.currentUser.updatePassword(password);
	};

	// Functions API
	setUserClaimsByEmail = (email, claimsToSet) => {
		return this.functions.httpsCallable('setUserClaimsByEmail')({ email, claimsToSet });
	};

	// User API
	user = uuid => this.db.ref(`users/${uuid}`);

	users = () => this.db.ref('users');
}

export default Firebase;
