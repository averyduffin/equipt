import {
	FACEBOOK_LOGIN,
	FACEBOOK_LOGGEDIN,
	FACEBOOK_GET_LOGIN_STATUS,
	facebookLoggedIn,
	facebookAuthExp,
	facebookNotAuth,
	FACEBOOK_LOG_OUT,
	facebookLoggedOut,
	FACEBOOK_GET_INFO,
	facebookInfo,
	facebookGetInfo,
} from '../actions/facebook';

const middleware = (store) => (next) => (action) => {
	const { type, payload } = action;
	switch (type) {
		case FACEBOOK_LOGGEDIN: {
			if (payload.noRedirect !== true) {
				window.location.assign('/');
			}
			store.dispatch(facebookGetInfo());
			break;
		}
		case FACEBOOK_LOGIN: {
			window.FB.login(
				(response) => {
					store.dispatch(facebookLoggedIn({ ...response }));
				},
				{ scope: 'public_profile,email' }
			);
			break;
		}
		case FACEBOOK_LOG_OUT: {
			window.FB.logout((response) => {
				store.dispatch(facebookLoggedOut({ ...response }));
			});
			break;
		}
		case FACEBOOK_GET_INFO: {
			window.FB.api('/me', (resp) => {
				store.dispatch(
					facebookInfo({ ...resp, photo: `http://graph.facebook.com/${resp.id}/picture?type=normal` })
				);
			});
			break;
		}
		case FACEBOOK_GET_LOGIN_STATUS: {
			window.FB.getLoginStatus((response) => {
				if (response.status === 'connected') {
					const { authResponse } = response;
					const { userID: userId, accessToken } = authResponse;
					store.dispatch(facebookLoggedIn({ userId, accessToken, noRedirect: true }));
				} else if (response.status === 'authorization_expired') {
					store.dispatch(facebookAuthExp());
				} else if (response.status === 'not_authorized') {
					store.dispatch(facebookNotAuth());
				}
			});
			break;
		}
		default:
			break;
	}
	next(action);
};

export default middleware;
