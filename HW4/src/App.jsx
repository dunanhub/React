import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import './App.css'
import TodoList from './components/TodoList.jsx'

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem('todo');

      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = useState('all');
  const inputRef = useRef(null);

  const addTask = useCallback((text) => {
    const value = text.trim();

    if (!value) return;

    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: value,
        complated: false
      },
    ]);

    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) => 
      prev.map((task) => 
        task.id === id ? { ...task, complated: !task.complated } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => 
      prev.filter((task) => task.id !== id)
    );
  }, []);

  const ClearComplated = useCallback(() => {
    setTasks((prev) =>
      prev.filter((task) => !task.complated)
    );
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((task) => !task.complated);
    if (filter === 'completed') return tasks.filter((task) => task.complated);
    return tasks;
  }, [tasks, filter]);

  const total = tasks.length;
  const complated = tasks.filter((task) => task.complated).length;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addTask(inputRef.current?.value || '');
    }, [addTask]
  );

  return (
    <div className="app">
      <h1>Todo List</h1>

      <form className="add-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="add-input"
          ref={inputRef}
          placeholder='New Task'
          aria-label='New Task'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmit(e);
            }
          }}
        />

        <button type="submit">Add Task</button>
      </form>

      <div className="toolbar">
        <div className="filters" role="tablist" aria-label="Task Filters">
          <button className={`filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
          <button className={`filter ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
        </div>

        <div className="stats">
          <span>Total: {total}</span>
          <span>Complated: {complated}</span>
        </div>
      </div>

      <TodoList 
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      <div className="footer-actions">
        <button 
          className="secondary"
          onClick={ClearComplated}
          disabled={complated === 0}
          title="Clear all completed tasks"
        >
          Clear Completed
        </button>
      </div>
    </div>
  )
}

export default App
