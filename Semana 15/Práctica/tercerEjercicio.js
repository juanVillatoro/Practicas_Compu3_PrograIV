/*Ejercicio 3, En un archivo cree dos arreglos el primero con departamentos y el segundo comunidades; 
deberá exportar ambos elementos y leerlos en otro archivo.*/

//Importamos los departamentos y cuidades
const { departamentos, ciudades } = require("./functions.js");

//Espacios para que hacer notar división
console.log("");
console.log("");

console.log("Lista de departamentos: ");

//Espacios para que hacer notar división
console.log("");


//Listado de todos los departamentos
departamentos.forEach((departamento) => {
    console.log(departamento);
});

//Espacios para que hacer notar división
console.log("");
console.log("");

console.log("Lista de ciudades: ");

//Espacios para que hacer notar división
console.log("");


//Listado de las principales ciudades
ciudades.forEach((ciudad) =>{
    console.log(ciudad);
})