const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

//Path /cubes/create
router.get('/create', (req, res) => {
  console.log(req.user);
  res.render('cube/create');
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
    owner: req.user._id,
  });

  res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId);

  if (!cube) return res.redirect('/404');

  res.render('cube/details', { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const accessories = await accessoryManager.getAll().lean();

  let hasAccessories = accessories.length > 0;

  res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
  const { accessory: accessoryId } = req.body;
  const cubeId = req.params.cubeId;

  await cubeManager.attachAccessory(cubeId, accessoryId);
  res.redirect(`/cubes/${cubeId}/details`);
});

router
  .route('/:cubeId/delete')
  .get(async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    res.render('cube/delete', { cube });
  })
  .post(async (req, res) => {
    await cubeManager.delete(req.params.cubeId);
    res.redirect('/');
  });

router
  .route('/:cubeId/edit')
  .get(async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    res.render('cube/edit', { cube });
  })
  .post(async (req, res) => {
    const cubeData = req.body;

    await cubeManager.update(req.params.cubeId, cubeData);

    res.redirect(`/cubes/${req.params.cubeId}/details`);
  });

module.exports = router;
