import { useEffect, useState, useMemo, useCallback } from "react";
import BookCard from "../components/BookCard";

export default function Books({ books, onDelete }) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");

  const handleSearch = useCallback((e) => setQuery(e.target.value), []);
  const handleGenre = useCallback((e) => setGenre(e.target.value), []);
  
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter(book => {
      const matchtitle = book.title.toLowerCase().includes(q);
      const matchGenre = genre === "All" ? true : book.genre === genre;
      return matchtitle && matchGenre;
    });
  }, [books, query, genre]);

  return (
    <section>
      <h2>Books</h2>

      <div className="filters">
        <input
          type="text"
          className="input"
          placeholder="Search by title..."
          value={query}
          onChange={handleSearch}
        />
        <select
          className="input"
          value={genre}
          onChange={handleGenre}
        >
          <option value="All">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Tech">Tech</option>
        </select>

        {visible.length === 0 ? (
          <p className="muted">No books found.</p>
        ) : (
          <div className="grid">
            {visible.map(book => (
              <BookCard key={book.id} {...book} onDelete={onDelete} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}