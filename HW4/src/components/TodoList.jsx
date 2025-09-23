import React, { memo } from 'react'
import TodoItem from './TodoItem.jsx'

function TodoList({ tasks, toggleTask, deleteTask }) {
  if (!tasks.length) {
    return <p className="empty">No tasks</p>
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key = {task.id}
          task = {task}
          toggleTask = {toggleTask}
          deleteTask = {deleteTask}
        />
      ))}
    </ul>
  )
}

export default memo(TodoList);