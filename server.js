const express = require('express');
const app = express();
const port = 8000;

// Define a route to render the products page
app.get('/', (req, res) => {
    // Render the products page using EJS
    res.send('Hi')
  });

  // Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });