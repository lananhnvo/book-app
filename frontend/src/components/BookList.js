import React from 'react';

function BookList({ books }) {
  if (books.length === 0) {
    return (
      <div className="alert alert-warning text-center">
        No books loaded.
      </div>
    );
  }

  return (
    <ul className="list-group shadow">
      {books.map((book, idx) => (
        <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{book.title}</strong>
            <div className="text-muted">
              by {book.author} ({book.year})
            </div>
          </div>
          <span className="badge bg-primary rounded-pill">
            {book.year}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
