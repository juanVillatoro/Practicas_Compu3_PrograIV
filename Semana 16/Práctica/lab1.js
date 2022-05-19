const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((response) => {
    console.log('Se han obtenido los datos del Bitcoin correctamente');

    let valorBitcoin="";

    var datos = response.data.bpi;
    var valor=[
    ]
    for (key in datos){
        valor.push(datos[key])
    }

    //Mostramos en la consola los datos obtenidos
    console.log(valor)

    valor.forEach(bitcoin => {
        valorBitcoin += `${bitcoin['code']}, ${bitcoin['description']}, ${bitcoin['rate']}\n`;
    });

    return fs.writeFile('PromiseBitcoin.csv', valorBitcoin);

})
.then(() => {
    console.log('Se guardaron los datos del Bitcoin en PromiseBitcoin.csv');
})