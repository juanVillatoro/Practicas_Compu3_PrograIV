/*//referenciar al modulo creado
const modulo = require("./firstModule")

console.log(modulo.propiedad);
modulo.saludar();

//modulos core
var data =[
    {
        a: 25,
        b: 32
    },
    {
        a: 22,
        b: 50
    }
];

//Ver todos los datos
console.log(data);
//Ver en un cuadro
console.table(data);

//Console group
console.group("Bloque");
console.group("Hola");
console.group("Hola");
console.group("Hola");
console.group("Bloque");*/


/*var fs = require('fs');
var parse = require('csv-parse')
var parser = parse.parse({columns: true}, function(err, records){
    console.log(records);
})*/
//fs.createReadStream('./lista.csv').pipe(parser);

var fs = require('fs');
var stringify = require('csv-stringify');
var someData = [
    {
        "Country": "El Salvador",
        "Official Language": "Spanish"
    },
    {
        "Country": "Nigeria",
        "Official Language": "English"
    },
    {
        "Country": "India",
        "Official Language": "Hindi, English"
    }
]

stringify.stringify(someData, {
    header: true
}, function (err, output) {
    fs.writeFileSync('./data.csv', output);
})