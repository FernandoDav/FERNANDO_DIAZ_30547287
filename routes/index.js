var express = require('express');
var router = express.Router();
const db = require('../db/models')

router.get("/dashboard", function(req, res, next) {
  res.render('med');
});
router.get('/', function(req, res, next) {
  res.redirect("/dashboard");
});
router.get("/med", function(req, res, next) {
  res.render('med');
});

router.get("/consulta", function(req, res, next) {
  res.render('consulta');
});
router.get("/compra", function(req, res, next) {
  res.render('compra');
});


router.get('/modif', function (req, res){
  res.render('modif')
});




router.get('/modif', (req, res) => {
  db.getalmacen()
    .then(data => {        
      console.log(data)
      res.render('modif', { almacen: data });
    })
     .catch(err => {
      res.render('modif', { almacen: [] });
  })
});
//insertar

router.get('/modif3', function (req, res){
  res.render('modif3')
});
  router.post('/modif3', (req, res) => {
    const {code, name, cant,  precio} = req.body;
    console.log(code, name, cant,  precio);
    db.insertalmacen(code, name, cant,  precio)
    .then(() => {
       res.redirect('modif3')
    })
    .catch(err => {
      console.log(err);
    })
  });

//editar

router.get('/modif2', function (req, res){
  res.render('modif2')
});

  router.post('/modif2', (req, res)=>{
    const {id , code , name , cant ,  precio} = req.body;
    db.updatealmacen(id , code , name , cant ,  precio)
    .then(() =>{
      res.redirect('modif');
    })
    .catch(err =>{
      console.log(err);
  
    })
  });

//borrar

  router.get('borrarID', (req, res)=>{
    const id = req.params.id;
    db.deletealmacen(id)
      .then(() => {
      res.redirect('modif');
    })
    .catch(err => {
    console.log(err);
    });
  })





router.get("/interno", function(req, res, next) {
  res.render('interno');
});





module.exports = router;


