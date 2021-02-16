const mysql = require('mysql');

const db = mysql.createConnection({
    user    : 'root',
    password:'',
    host    :'localhost',
    database: 'Chunin'
});

db.connect((error) => {
    error ? console.log('connection error : '+error) : console.log('database connected');
})
module.exports = db