const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3001;
const cors = require('cors');
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// use GET to retrieve list of books
// used ChatGPT to generate list of most anticipated fictional books for 2025
//to test out alert functionality /*
app.get('/books', (req, res) => {
  res.json([
      {
        "title": "Onyx Storm",
        "author": "Rebecca Yarros",
        "year": 2025
      },
      {
        "title": "Sunrise on the Reaping",
        "author": "Suzanne Collins",
        "year": 2025
      },
      {
        "title": "Great Big Beautiful Life",
        "author": "Emily Henry",
        "year": 2025
      },
      {
        "title": "The Emperor of Gladness",
        "author": "Ocean Vuong",
        "year": 2025
      },
      {
        "title": "Beautiful Ugly",
        "author": "Alice Feeney",
        "year": 2025
      },
      {
        "title": "Say You'll Remember Me",
        "author": "Abby Jimenez",
        "year": 2025
      },
      {
        "title": "Katabasis",
        "author": "R.F. Kuang",
        "year": 2025
      },
      {
        "title": "Bury Our Bones in the Midnight Soil",
        "author": "Victoria E. Schwab",
        "year": 2025
      },
      {
        "title": "Scythe & Sparrow",
        "author": "Brynne Weaver",
        "year": 2025
      },
      {
        "title": "Deep End",
        "author": "Ali Hazelwood",
        "year": 2025
      }    
  ]);
});
// */