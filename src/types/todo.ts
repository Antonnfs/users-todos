export interface TodoState {
	todos: any[];
	loading: Boolean;
	error: null | String;
	page: Number;
	limit: Number;
}
export enum TodoActionTypes {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	SET_TODO_PAGE = 'SET_TODO_PAGE'
}
interface FetchTodoAction {
	type: TodoActionTypes.FETCH_TODOS;
}
interface FetchTodoSuccessAction {
	type: TodoActionTypes.FETCH_TODOS_SUCCESS;
	payload: any[];
}
interface FetchTodoErrorAction {
	type: TodoActionTypes.FETCH_TODOS_ERROR;
	payload: String;
}
interface SetTodoPage {
	type: TodoActionTypes.SET_TODO_PAGE;
	payload: Number;
}
export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage;