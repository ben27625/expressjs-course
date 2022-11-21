const { request, Router } = require('express');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const { extname } = require('path');
const db = require('./config/db/index');

const route = require('./routes');

// connect db
db.connect();

// static
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.use(express.urlencoded());
app.use(express.json());

// http loger
app.use(morgan('combined'));

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.listen(port, (req, res) => {
  console.log('App listening on port' + port);
});
