//Codigo sincrono
const fs = require('fs');
const filename = 'file.txt';
const data = fs.readFileSync(filename);

const promise = new Promise((resolve) => {
    resolve(data.toString());
});

promise.then((response) => {
    console.log(response)
})

// console.log(data.toString());

// console.log('sincrono');

//Codigo Asincrono
/*fs.readFile(filename, (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString())
})

console.log('Asincrono');*/
