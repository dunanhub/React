import React, { memo, useCallback } from 'react'

function TodoItem({ task, toggleTask, deleteTask }) {
  const onToggle = useCallback(() => 
    toggleTask(task.id), [toggleTask, task.id]
  );
  const onDelete = useCallback(() =>
    deleteTask(task.id), [deleteTask, task.id]
  );

  return (
    <li className="item">
      <label className="checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          aria-label={"Mark task " + task.title + (task.completed ? " uncompleted" : " completed")}
        />

        <span className={task.completed ? "done" : ""}>
          {task.text}
        </span>

        <button
          className="danger"
          onClick={onDelete}
        >
          Delete
        </button>
      </label>
    </li>
  )
}

export default memo(TodoItem);