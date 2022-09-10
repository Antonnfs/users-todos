import React, { useEffect, useState } from 'react'
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector'

export const TodoList: React.FC = () => {
	const {todos, page, error, loading, limit} = useTypedSelector(state => state.todo);
	const { fetchTodos, setTodoPage} = useAction();
	const [pages, setPages] = useState<number[]>([1]);
	const countPages = todos.length / 10;
	for (let i = 1; i < countPages; i++) {
		setPages([...pages, i])
		
	}
	console.log(pages);

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page, pages])
	
	if (loading) {
		return <h1 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 30, }}>
				Loading... Please wait...
			</h1>
	}
	if (error) {
		return <h1 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 30, }}>
				{error}
			</h1>
	}
	return  (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 30, }}>
			{todos.map(todo => 
				<div key={todo.id}>{todo.id} - {todo.title}</div>
			)}
			<div style={{display: 'flex', gap: 10, marginTop: 30}}>
				{pages.map(p => (
					<button onClick={() => setTodoPage(p)}
						style={{border: p === page ? '2px solid green' : '1px solid gray', cursor: 'pointer', padding: '5px 10px 5px 10px'}}
						key={p}
					>{p}</button>
				))}
			</div>
		</div>
	)
}

