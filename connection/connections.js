const mysql = require('mysql');
const conn = mysql.createConnection({
    user    : 'root',
    password    :'',
    host    : 'localhost',
    database    : 'collections_books'
});

conn.connect((error) => {
    error ? console.log('connection error : '+error) : console.log('database connected');
});
module.exports = conn;