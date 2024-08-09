const mysql = require ('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample_database'
});
connection.connect((err)=>{
    if (err) {
        console.error('gagal connect ke database.', err.stack);
        return
    }
    console.log('Berhasil Connect ke database');
});

module.exports={
    connection
};