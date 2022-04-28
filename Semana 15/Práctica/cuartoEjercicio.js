/*Ejercicio 4,  Liste las empresas utilizan Node.js */

//Importamos las empresas
const { empresas } = require("./functions.js");

//Espacio por estética
console.log("");

console.log("Listado de empresas que utilizan Node.js: ");

//Espacio por estética
console.log("");

//Listado de empresa
empresas.forEach((empresa) => {
    console.log(empresa);
});