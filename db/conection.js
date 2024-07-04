const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite', (err) =>{
    if(err) console.log(err);
    db.run('CREATE TABLE IF NOT EXISTS almacen (id INTEGER PRIMARY KEY AUTOINCREMENT, code INTEGER NOT NULL, name TEXT, cant REAL, precio REAL NOT NULL)');
console.log('base de datos creada')
});
module.exports = db;