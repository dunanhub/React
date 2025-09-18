import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const lastnameRef = useRef()

  const showAlert = useCallback(() => {
    alert(`First Name: ${firstname}, Last Name: ${lastname}`)
  }, [firstname, lastname])

  const focusLastname = () => {
    lastnameRef.current.focus()
  }

  return (
    <div className="container">
      <h2>Форма с useRef и useCallback</h2>

      <div className="field">
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Last Name:</label>
        <input
          type="text"
          ref={lastnameRef}
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={focusLastname}>Фокус на фамилию</button>
        <button onClick={showAlert}>Показать данные</button>
      </div>
    </div>
  )
}

export default App
