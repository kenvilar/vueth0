require('dotenv').config();
import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
	domain: process.env.DOMAIN,
	clientID: process.env.CLIENT_ID,
	redirectUri: process.env.REDIRECT_URI,
	//audience: process.env.AUDIENCE,
	responseType: process.env.RESPONSE_TYPE,
	scope: process.env.SCOPE
});

const login = () => {
	webAuth.authorize();
};

export {
	login
}
