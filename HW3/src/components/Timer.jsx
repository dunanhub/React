import { useEffect, useState } from "react";

export default function Timer() {
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(0);
  const [isActive, setIsActivate] = useState(false);

  const startTimer = () => {
    const seconds = parseInt(inputValue, 10);

    if (isNaN(seconds) || seconds <= 0) {
      alert("Пожалуйста, введите корректное положительное число секунд.");
      return;
    }

    setTime(seconds);
    setIsActivate(true);
  };

  useEffect(() => {
    let timerId;

    if (isActive && time > 0) {
      timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0 && isActive) {
      setIsActivate(false);
      alert("Время вышло!");
    }

    return () => clearInterval(timerId);
  }, [isActive, time]);

  return (
    <div className="timer">
      <div className="controls">
        <input 
          type="number" 
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите время в секундах"
        />

        <button onClick={startTimer} className="btn">Запустить</button>
      </div>

      <div className="display">
        <p className="time">
          {time}
        </p>
      </div>
    </div>
  );
}