import { FACEBOOK_LOGGEDIN, FACEBOOK_INFO } from '../actions/facebook';

const initState = {
	userId: null,
	accessToken: null,
	email: null,
	pictureHeight: null,
	photo: null,
	name: null,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case FACEBOOK_LOGGEDIN: {
			const { userID: userId, accessToken } = action.payload;
			return { ...state, userId, accessToken };
		}
		case FACEBOOK_INFO: {
			const { photo } = action.payload;
			console.log(action.payload);
			return { ...state, photo };
		}
		default:
			return state;
	}
};

export default reducer;
