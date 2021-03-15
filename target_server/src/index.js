const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//middlewares
app.use(session({
  secret: 'target',
  resave: false,
  saveUninitialized: false
}));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//globlal-variables

//routes
app.use(require('./routes'));
app.use(require('./routes/login'));

//public

//starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
