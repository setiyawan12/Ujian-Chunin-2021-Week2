const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const bookController = require('./controllers/book_controllers');

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set(bodyParser.json());
app.set(bodyParser.urlencoded({extended:false}));

app.get('/books', bookController.getAllData);
app.get('/', bookController.viewAllData);


app.listen(port,()=>{
    console.log(`server is running`);
});