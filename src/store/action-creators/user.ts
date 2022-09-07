import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from './../../types/user';

export function fetchUsers() {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({type: UserActionTypes.FETCH_USERS})
			const response = await axios.get('https://jsonplaceholder.typicode.com/userrs')
			dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
		} catch (error) {
			dispatch({
				type: UserActionTypes.FETCH_USERS_ERROR, 
				payload: 'It was an Error of fetching users!'
			})
		}
	}
}