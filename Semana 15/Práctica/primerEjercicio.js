/*---------------------Ejercicio 1, Escriba un programa el cual reciba la edad argumento y 
determine si es mayor de edad.*/

//Creamos la interfaz
const edad = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

//Pedidos que agregue su edad
edad.question("Ingrese su edad ", edad=>{
    //Validamos si es mayor de edad, caso contrario es menor de edad
    if (edad >= 18) {
        console.log("Usted es mayor de edad"); 
    }else{
        console.log("Usted es menor de edad");
    }
});