/*process.argv.forEach((index, val) => {
    console.log(`${index}: ${val}`);
});*/

//Mostramos todos los procesos

//console.log("PROCESS: ", process);

// console.log('Titulo del proceso', process.title);
// console.log('so', process.platform);
// console.log('Version de node', process.version);

/*const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

name.question("Cuál es su nombre? ", name => {
    console.log(`Bienvenido ${name}`)
})*/

const { sum, colors }  = require("./function.js");

//Declaracion de variables, var let const
const result = sum(5,7);
console.log("El resultado es: ", result);

colors.forEach((color) => {
    console.count(color);
});