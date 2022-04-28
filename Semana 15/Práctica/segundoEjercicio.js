/*Ejercicio 2,  Escriba un programa que le solicite dos números y permita realizar las operaciones básicas, el
usuario debe seleccionar la operación a realizar.*/

//Importamos las funciones
const {suma, resta, multipli, divisi, operaciones } = require("./functions.js");

const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readLine.question("Ingrese el primer número: ", (num1) => {
    readLine.question("Ingrese el segundo número: ", (num2) => {
        //Mostramos las operaciones con sus numeros respectivos
        operaciones.forEach((operacion) => {
            console.log(operacion);
        });
        //Operamos según el número seleccionado
        readLine.question("Seleccione una operación: ", (seleoperacion) => {
            if(seleoperacion==="1"){
                console.log(suma(num1, num2))
            } else if (seleoperacion==="2"){
                console.log(resta(num1, num2))
            } else if (seleoperacion==="3"){
                console.log(multipli(num1, num2))
            } else if (seleoperacion==="4"){
                console.log(divisi(num1, num2))
            } else {
                console.log("La operación es inexistente")
            }
        })
    })
});