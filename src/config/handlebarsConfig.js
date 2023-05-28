const handlebars = require('express-handlebars');

function handlebarsConfig(app) {
  //Handlebars config
  app.engine(
    'hbs',
    handlebars.engine({
      extname: 'hbs',
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'src/views'); // Where to look for the folder cause default is "root" now chaning to view
}

module.exports = handlebarsConfig;
