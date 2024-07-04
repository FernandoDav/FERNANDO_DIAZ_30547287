const db = require('./conection');

let querys = {
    getalmacen: 'SELECT * FROM almacen',
    getalmacenID: 'SELECT * FROM almacen WHERE id = ?',
    insertalmacen: 'INSERT INTO almacen (code, name, cant,  precio) VALUES (?, ?, ?, ?)',
  
    updatealmacen: 'UPDATE almacen SET code = ?, name = ?, cant = ?, precio = ?  WHERE id = ?',
  
    deletealmacen: 'DELETE FROM almacen WHERE id = ?'
   
}

    module.exports = {

        getalmacen(){
            return new Promise((resolve, reject)=>{
                db.all(querys.getalmacen, (err,rows)=>{
                    if(err) reject(err);
                    resolve(rows);
                })
            })
        },

        getalmacenID(id){
            return new Promise((resolve, reject)=>{
                db.all(querys.getalmacenID, [id], (err,rows)=>{
                    if(err) reject(err);
                    resolve(rows);
                })
            })
        },

        insertalmacen(code, name, cant,  precio){
            return new Promise((resolve, reject) => {
                db.run(querys.insertalmacen, [ code, name, cant,  precio], (err) => {
                    if(err) reject(err);
                        resolve()
                })
            })
        
        },

        updatealmacen(id, code, name, cant,  precio){
            return new Promise((resolve, reject) => {
                db.run(querys.updatealmacen, [ id, code, name, cant,  precio ], (err) => {
                    if(err) reject(err);
                    resolve();
                })
            })
        },

        deletealmacen(id){
            return new Promise((resolve, reject) => {
                db.run(querys.deletealmacen, [id], (err) => {
                    if(err) reject(err);
                    resolve();
                })
            })
        },

      };