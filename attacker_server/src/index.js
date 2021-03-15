const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//initialization
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middleware

//routes
app.use(require('./routes'));

//public

//globlal-variables

//starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
