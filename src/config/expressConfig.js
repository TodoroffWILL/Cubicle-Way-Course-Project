const express = require('express');
const path = require('path');

function expressConfig(app) {
  // We have to take the express so we can use static
  app.use(express.static(path.resolve(__dirname, '../public')));
  app.use(express.urlencoded({ extended: false }));
}

module.exports = expressConfig;
