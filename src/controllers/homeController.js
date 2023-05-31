const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/', async (req, res) => {
  console.log(req.query); // Transform the query string to object

  const { search, from, to } = req.query;
  const cubes = await cubeManager.getAll(search, from, to);

  res.status(200).render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
  res.status(404).render('about');
});
router.get('/404', (req, res) => {
  res.render('404');
});

module.exports = router;
