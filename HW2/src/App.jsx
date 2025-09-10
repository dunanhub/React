import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UserCard from './components/UserCard'
import Button from './components/Button'

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'Diana', email: 'diana@example.com' },
    { id: 5, name: 'Ethan', email: 'ethan@example.com' },
  ]);

  const handleAddUser = () => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers(prev => [...prev, { id, name: `User ${id}`, email: `user${id}@example.com` }]);
  };

  return (
    <div className="app">
      <h1>User Cards</h1>
      <div className="user-list">
        {users.map(u => (
          <UserCard key={u.id} name={u.name} email={u.email} />
        ))}
      </div>

      <Button text="Add User" onClick={handleAddUser} />
    </div>
  )
}
