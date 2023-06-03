import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/authActions";

const initialState = {
	user: null,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				error: null,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				user: null,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default authReducer;
