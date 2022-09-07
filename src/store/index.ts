import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { ThunkAction } from 'redux-thunk';


export const store = createStore({}, applyMiddleware(ThunkAction))