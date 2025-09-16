import { useState } from 'react'
import './App.css'

import Timer from './components/Timer'

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="title">
          Таймер обратного отсчёта
        </div>
        <Timer />
      </div>
    </div>
  )
}

export default App
