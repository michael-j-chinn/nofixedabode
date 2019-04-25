const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.setUserClaimsByEmail = functions.https.onCall((data, context) => {
	return admin.auth().getUserByEmail(data.email).then(user => {
		return admin.auth().setCustomUserClaims(user.uid, data.claimsToSet);
	}).then(() => {
		return {
			message: `Success updating ${date.email} with claims: ${data.claimsToSet}`
		};
	}).catch(error => {
		return error;
	});
});
