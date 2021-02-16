const express = require("express");
require("dotenv").config({});
const port = 3000;
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mainRouter = require('./src/routes')
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set(bodyParser.json());
app.set(bodyParser.urlencoded({extended:false}));

// app.post("/save", (req, res) => {
//     let {data} = req.body;
//     console.log('data', data);
//     let sql = "INSERT INTO books SET ?";
//     conn.query(sql, data, (err, results) => {
//         if (!err){
//             results.redirect('/');
//         }else{
//             throw err;
//         }
//     });
// });
// app.get('/books', bookController.getAllData);
// app.get('/', bookController.viewAllData);
// app.post('/book',bookController.saveData)
// app.get('/save',bookController.saveData);
// app.get('/', bookController.findAll);
// app.post('/book', bookController.create);

app.use("/", mainRouter)
app.use(function (req, res) {
    res.status(404).json({
      msg: "Data Not Found",
      status: 404,
    });
  });
app.listen(process.env.PORT||port, () => {
    console.log("Server is running on port " + port);
  });
module.exports = app;