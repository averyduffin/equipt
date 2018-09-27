export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
export const FACEBOOK_LOGGEDIN = 'FACEBOOK_LOGGEDIN';
export const FACEBOOK_ERROR = 'FACEBOOK_ERROR';
export const FACEBOOK_LOG_OUT = 'FACEBOOK_LOG_OUT';
export const FACEBOOK_LOGGED_OUT = 'FACEBOOK_LOGGED_OUT';
export const FACEBOOK_GET_LOGIN_STATUS = 'FACEBOOK_GET_LOGIN_STATUS';
export const FACEBOOK_NOT_AUTHORIZED = 'FACEBOOK_NOT_AUTHORIZED';
export const FACEBOOK_AUTH_EXP = 'FACEBOOK_AUTH_EXP';
export const FACEBOOK_GET_INFO = 'FACEBOOK_GET_INFO';
export const FACEBOOK_INFO = 'FACEBOOK_INFO';

export const facebookLogin = (payload) => ({
	type: FACEBOOK_LOGIN,
	payload,
});

export const facebookError = (payload) => ({
	type: FACEBOOK_ERROR,
	payload,
});

export const facebookLoggedIn = (payload = {}) => ({
	type: FACEBOOK_LOGGEDIN,
	payload,
});

export const faceBookLogOut = (payload = {}) => ({
	type: FACEBOOK_LOG_OUT,
	payload,
});

export const facebookGetLoginStatus = (payload = {}) => ({
	type: FACEBOOK_GET_LOGIN_STATUS,
	payload,
});

export const facebookNotAuth = () => ({
	type: FACEBOOK_NOT_AUTHORIZED,
});

export const facebookAuthExp = () => ({
	type: FACEBOOK_AUTH_EXP,
});

export const facebookLoggedOut = (payload = {}) => ({
	type: FACEBOOK_LOGGED_OUT,
	payload,
});

export const facebookGetInfo = (payload = {}) => ({
	type: FACEBOOK_GET_INFO,
	payload,
});

export const facebookInfo = (payload = {}) => ({
	type: FACEBOOK_INFO,
	payload,
});
