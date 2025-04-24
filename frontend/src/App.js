import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import useBooks from './hooks/useBooks';
import BookList from './components/BookList';

function App() {
  const books = useBooks();

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-4">📚 Most Anticipated 2025 Fictional Reads</h1>
      </div>
      <BookList books={books} />
    </div>
  );
}

export default App;
