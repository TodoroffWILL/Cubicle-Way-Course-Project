const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');

//Path /cubes/create
router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  // Getting the data from the form
  const { name, description, imageUrl, difficultyLevel } = req.body;
  // Giving the data to create function which is saving it to the DB
  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });

  res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
  
  const cube = await cubeManager.getOne(req.params.cubeId);
  console.log(cube);
  if (!cube) return res.redirect('/404');

  res.render('details', { cube });
});
module.exports = router;
