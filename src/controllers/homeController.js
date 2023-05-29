const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/', (req, res) => {
  const cubes = cubeManager.getAll();

  res.status(200).render('index', { cubes });
});

router.get('/about', (req, res) => {
  res.status(404).render('about');
});

module.exports = router;
