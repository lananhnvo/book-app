import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
// added concurrency in root package.json to restart server using npm start

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched books:', data);
        setBooks(data);
    })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-4">📚 Most Anticipated 2025 Fictional Reads</h1>
      </div>

      {books.length === 0 ? (
        <div className="alert alert-warning text-center">
          No books loaded.
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
