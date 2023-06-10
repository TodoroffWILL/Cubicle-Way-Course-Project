const router = require('express').Router();

const userManager = require('../managers/userManager');

router
  .route('/register')
  .get((req, res) => {
    res.render('user/registerPage');
  })
  .post(async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    await userManager.register({ username, password, repeatPassword });
    res.redirect('/users/login');
  });

router
  .route('/login')
  .get((req, res) => {
    res.render('user/loginPage');
  })
  .post(async (req, res) => {
    const { username, password } = req.body;

    const user = await userManager.login(username, password);
    console.log(user);

    res.cookie('username', user.username);
    res.redirect('/');
  });

module.exports = router;
