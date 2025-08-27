import { useState } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="container">
      <Header />
      <main style={{ minHeight: 'calc(100vh - 120px)', padding: '1rem', fontSize: '1.2rem' }}>
        Hello, World!
      </main>
      <Footer />
    </div>
  );
}

export default App;