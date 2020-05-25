//VAMOS a importar express
const express = require('express');
//declaramos un objeto de express
const app = express();
//Vamos a definir un sitio estatico en /public
app.use(express.static(__dirname + '/pinto'));
//vamos a escuchar el puerto 3000 de tcp
app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000");
});
