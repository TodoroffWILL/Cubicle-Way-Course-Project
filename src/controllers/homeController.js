const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
