import React from 'react'
import { TodoList } from './components/TodoList'
import { UserList } from './components/UserList'

export default function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Getting User List and Todo List</h1>
      <UserList/>
      <hr/>
      <TodoList/> 
    </div>
  )
}

