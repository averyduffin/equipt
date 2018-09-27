import { FACEBOOK_LOGGEDIN, FACEBOOK_ERROR, FACEBOOK_LOGGED_OUT } from '../actions/facebook';
import { FACEBOOK } from '../../constants';

const initState = {
	loggedIn: false,
	type: null,
	error: null,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case FACEBOOK_LOGGEDIN:
			return { ...state, loggedIn: true, type: FACEBOOK };
		case FACEBOOK_ERROR:
			return { ...state, error: action.payload };
		case FACEBOOK_LOGGED_OUT:
			return { ...state, loggedIn: false };
		default:
			return state;
	}
};

export default reducer;
