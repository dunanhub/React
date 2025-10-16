import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Books from './pages/Books'
import AddSBook from './pages/AddsBook'

export default function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('miniLibraryBooks');
      if (raw) setBooks(JSON.parse(raw));
    } catch (error) { console.error(error); }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('miniLibraryBooks', JSON.stringify(books));
    }
    catch (error) { console.error(error); }
  }, [books]);

  const handleAdd = useCallback((book) => {
    setBooks((prev) => [{...book, id: Date.now()}, ...prev]);
  }, []);

  const handleDelete = useCallback((id) => {
    setBooks((prev) => prev.filter(book => book.id !== id));
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/books" replace />} />
          <Route path="/books" element={<Books books={books} onDelete={handleDelete} />} />
          <Route path="/add-book" element={<AddSBook onAdd={handleAdd} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <h1>MiniLibrary</h1>
      <nav>
        <NavLink to="/books" className={({isActive}) => isActive ? "link active" : "link"}>Books</NavLink>
        <NavLink to="/add-book" className={({isActive}) => isActive ? "link active" : "link"}>Add Book</NavLink>
      </nav>
    </header>
  )
}

function NotFound() {
  return (
    <h2>404 - Page Not Found :|</h2>
  )
}