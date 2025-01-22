const express = require('express');
const app = express();

// Increased limit to handle larger request bodies
app.use(express.json({ limit: '10mb' }));

app.post('/data', (req, res) => {
  // Check for parsing errors
  if (!req.body) {
    return res.status(400).send('Invalid JSON payload');
  }

  console.log(req.body);
  res.send('Data received');
});

app.listen(3000, () => console.log('Server listening on port 3000'));