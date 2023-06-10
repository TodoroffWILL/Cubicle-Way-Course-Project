const jwt = require('../lib/jwt');
const { SECRET } = require('../config/secretForJWT');

exports.authentication = async (req, res, next) => {
  const token = req.cookies['auth'];

  if (token) {
    // validate token
    try {
      const user = await jwt.verify(token, SECRET);

      req.user = user;

      next();
    } catch (err) {
      res.clearCookie('auth');
      res.redirect('/users/login');
    }
  } else {
    next();
  }
};
