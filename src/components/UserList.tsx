import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UserList: React.FC = () => {
	const { users, loading, error } = useTypedSelector(state => state.user)	
	const {fetchUsers} = useAction();

	useEffect(() => {
		fetchUsers()
	}, [])
	if (loading) {
		return <h1>Loading... Please wait...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}
	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 30}}>
			{users.map(user => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	)
}
