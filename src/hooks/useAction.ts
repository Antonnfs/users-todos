import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/action-creators/user"



export function useAction() {
	const dispatch = useDispatch();
	return bindActionCreators(UserActionCreators, dispatch)
}
