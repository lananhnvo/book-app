 import { useEffect, useState } from "react";
 function useBooks() { 
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

  return books;
 }

 export default useBooks;