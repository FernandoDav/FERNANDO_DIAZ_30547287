d=prompt("ingrese su usuario admin");
r=prompt("ingrese su contraseña");
ir();
function ir() {
    var f="admin";
    var j=2020;
    if (d==f && r==j ) {
        alert("entrada exitosa");
    } else {

        
           alert("FUERA DE AQUI")
            router.get("/med", function(req, res, next) {
                res.render('med', { title: 'Express' });
             
        })
        
    } 
}
function li() {
    d=prompt("ingrese usuario");
    r=prompt("ingrese contraseña");
    ir();
}