require("dotenv").config({});
const express = require("express");
const port = process.env.PORT|| 8009;
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const connection = require('./src/connection/connections');
const exphbs = require('express-handlebars');
const mainRouter = require('./src/routes')
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api", mainRouter)
app.get('/',(req, res) => {
  let sql = "SELECT id, judul, penerbit, penulis, kategori, tahun, cover FROM books JOIN category ON books.category_id = id_category";
  let query = connection.query(sql, (err, data) => {
      if(err) throw err;
      res.render('index_view', {
          title : 'Succes',
          books : data
      });
  });
  app.get('/delete/:id',(req, res) => {
    const id = req.params.id;
    let sql = `DELETE from books where id = ${id}`;
    let query = connection.query(sql,(err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});
});
app.post('/save', (req, res) => {
  let data = req.body;
  let sql = "INSERT INTO books SET ?";
  connection.query(sql, data, (err, results) => {
      if (!err){
          res.redirect('/');
      }else{
          throw err;
      }
  });
});
app.post('/update/:id', (req, res) => {
    let data = req.body;
    let sql = "";
    connection.query(sql, data, (err, results) => {
        if (!err){
            res.redirect('/');
        }else{
            throw err;
        }
    });
  });
app.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM books WHERE id ="+id+"";
  let query = connection.query(sql, (err, data) => {
    if (!err){
        res.render('edit_view_books', {
            results: data[0],
        })
    }else{
        throw err;
    } 
  });
});
app.post('/update', (req, res) => {
    let data = req.body;
    let sql = `UPDATE books SET ? WHERE id = ${data.id}`;
    connection.query(sql, data, (err, results) => {
        console.log(results);
        if (!err){
            res.redirect('/');
        }else{
            throw err;
        }
    });
});
app.get('/category', (req, res) => {
    let sql = "SELECT * FROM category";
    connection.query(sql, (err, data) => {
        if (!err) {
            res.render("view_category", {
                title : "Category Collection",
                category: data,
            })
        } else {
            throw err;
        }
    });
});
app.post('/category/save', (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO category SET ?";
    connection.query(sql, data, (err, results) => {
        if (!err){
            res.redirect('/category');
        }else{
            throw err;
        }
    });
  });
  app.get('/category/delete/:id',(req, res) => {
    const id_category = req.params.id;
    let sql = `DELETE from category where id_category = ${id_category}`;
    let query = connection.query(sql,(err, result) => {
        if(err) throw err;
        res.redirect('/category');
    });
});
app.get("/category/edit/:id", (req, res) => {
    let id_category = req.params.id;
    let sql = "SELECT * FROM category WHERE id_category ="+id_category+"";
    let query = connection.query(sql, (err, data) => {
      if (!err){
          res.render('edit_view_category', {
              results: data[0],
          })
      }else{
          throw err;
      } 
    });
  });
  app.post('/UpdateCategory', (req, res) => {
    let data = req.body;
    let sql = `UPDATE category SET ? WHERE id_category = ${data.id_category}`;
    connection.query(sql, data, (err, results) => {
        if (!err){
            res.redirect('/category');
        }else{
            throw err;
        }
    });
});
app.listen(port, () => {
    console.log("Server is running on port " + port);
  });
module.exports = app;