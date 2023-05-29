const express = require('express');
// Express config
const expressConfig = require('./config/expressConfig');
// Handlebars config
const handlebarsConfig = require('./config/handlebarsConfig');
// Get home controller

const routes = require('./routes');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(routes);
// Routes

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});
