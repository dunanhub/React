import { useEffect, useRef, useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [shownOver10, setShownOver10] = useState(false);
  const inputRef = useRef(null);

  // предупреждение, когда задач стало > 10
  useEffect(() => {
    if (tasks.length > 10 && !shownOver10) {
      alert("У вас более 10 задач для выполнения");
      setShownOver10(true);
    }
    if (tasks.length <= 10 && shownOver10) {
      // опускаемся ниже порога — позволим снова сработать при повторном превышении
      setShownOver10(false);
    }
  }, [tasks.length, shownOver10]);

  const addTask = () => {
    const value = text.trim();
    if (!value) return;
    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      done: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    setText("");
    inputRef.current?.focus();
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const clearAll = () => {
    if (tasks.length === 0) return;
    if (confirm("Удалить все задачи?")) setTasks([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  const total = tasks.length;
  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <>
      <div className="controls">
        <div className="input-row">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Введите задачу и нажмите Enter или кнопку"
            className="input"
          />
          <button onClick={addTask} className="btn primary">Добавить</button>
        </div>

        <div className="stats">
          <span>Всего: <b>{total}</b></span>
          <span>Выполнено: <b>{doneCount}</b></span>
          <button onClick={clearAll} className="btn ghost">Очистить всё</button>
        </div>
      </div>

      <ul className="list">
        {tasks.length === 0 ? (
          <li className="empty">Список пуст. Добавьте первую задачу.</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="item">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span className={task.done ? "title done" : "title"}>
                  {task.title}
                </span>
              </label>

              <button
                className="btn danger"
                aria-label="Удалить"
                onClick={() => removeTask(task.id)}
              >
                Удалить
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
