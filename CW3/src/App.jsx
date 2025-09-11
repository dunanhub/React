import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <div className="app">
      <div className="card">
        <header className="header">
          <div className="logo" aria-hidden></div>
          <div>
            <h1 className='title'>Todo-List</h1>
            <p className="subtitle">A simple todo list application</p>
          </div>
        </header>

        <TodoList />
      </div>
      <footer className="footer">
        <small>Made with ❤️ by [@d.unan_]</small>
      </footer>
    </div>
  );
}

export default App
