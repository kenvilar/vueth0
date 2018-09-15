const auth0 = require('auth0-js');
require('dotenv').config();

let tokens = {};

const webAuth = new auth0.WebAuth({
	domain: process.env.VUE_APP_AUTH0_DOMAIN,
	clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
	redirectUri: process.env.VUE_APP_AUTH0_REDIRECT_URI,
	audience: process.env.VUE_APP_AUTH0_AUDIENCE,
	responseType: process.env.VUE_APP_AUTH0_RESPONSE_TYPE,
	scope: process.env.VUE_APP_AUTH0_SCOPE
});

const login = () => {
	webAuth.authorize();
};

const handleAuth = (callback) => {
	webAuth.parseHash((err, authResult) => {
		if (authResult && authResult.accessToken && authResult.idToken) {
			tokens.accessToken = authResult.accessToken;
      tokens.idToken = authResult.idToken;
      tokens.expiry = (new Date()).getTime() + authResult.expiresIn * 1000;
      callback();
		} else {
			console.log(err);
		}
	});
};

const isLoggedIn = () => {
	return (tokens.accessToken && (new Date()).getTime() < tokens.expiry);
};

const logout = () => {
	tokens = {};
};

export default {
	login, handleAuth, isLoggedIn, logout
};
