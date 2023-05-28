const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 5000;

//Handlebars config
app.engine(
  'hbs',
  handlebars.engine({
    extname: 'hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', 'src/views'); // Where to look for the folder cause default is "root" now chaning to view
// Routes

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});
