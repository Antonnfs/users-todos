
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS_ERROR';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';



interface UserState {
	users: any[];
	loading: Boolean;
	error: null | String
}
interface UserAction {
	type: String;
	payload?: any;
}

const initialState: UserState = {
	users: [],
	loading: false,
	error: null
}

export function userReducer(state = initialState, action: UserAction): UserState {
	switch (action.type) {
		case FETCH_USERS:
			return {loading: true, error: null, users: []}
		case FETCH_USERS_SUCCESS:
			return {loading: false, error: null, users: action.payload}
		case FETCH_USERS_ERROR:
			return {loading: false, error: action.payload, users: []}
		default:
			return state;
	}
}