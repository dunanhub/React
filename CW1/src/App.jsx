import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import ProfileCard from './components/ProfileCard'

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header onNavigate={setPage} />
      <div className="content">
        {page === "home" && <h1>Добро пожаловать! 👋</h1>}
        {page === "about" && <ProfileCard />}
        {page === "contact" && <p>Свяжитесь со мной через email: ubniyev.b@gmail.com</p>}
      </div>
      <Footer />
    </>
  );
}

export default App
