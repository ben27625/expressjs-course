const { request } = require("express");
const express = require("express");
const morgan = require("morgan");
const path = require("path")
const app = express();
const port = 3000;
const {engine} = require('express-handlebars');

// static
app.use(express.static(path.join(__dirname, 'public')));

const { extname } = require("path");



// http loger
app.use(morgan("combined"));


app.engine('hbs', engine({
    extname: '.hbs',
}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));


app.get('/', (req, res) => {
    return res.render(
       'home'
    )
})



app.get('/news', (req, res) => {
    return res.render(
       'news'
    )
})


app.listen(port, (req, res) => {
    console.log("App listening on port" + port)
})