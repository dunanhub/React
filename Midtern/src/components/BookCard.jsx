import React from "react";

function BookCard({ id, title, author, genre, rating, onDelete }) {
  return (
    <div className="card">
      <div className="card_row">
        <h3 className="card_title">{title}</h3>
        <span className="card_badge">{genre}</span>
      </div>
      <p className="card_author">{author}</p>
      <p className="card_rating">Rating: {rating}</p>
      <button className="btn btn--danger" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  )
}

export default React.memo(BookCard);