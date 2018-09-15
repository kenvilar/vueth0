const auth0 = require('auth0-js');
require('dotenv').config();

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

export default {
	login
}
