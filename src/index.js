const express = require('express');
// Express config
const expressConfig = require('./config/expressConfig');
// Handlebars config
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

// Routes
app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});
