const fs = require('fs')
const pdfParse = require('pdf-parse')

let extractPDF = async (file) => {
    let fileSync = fs.readFileSync(file)
    try {
        let Parse = await pdfParse(fileSync)
        console.log('Content: ', Parse.text)
    } catch (e) {
        throw new Error(e)
    }
}

let pdfRead = './text.pdf'
extractPDF(pdfRead)

// const archivo = 'Text.pdf';

// const contenido = '\nEsto tendrá el archivo';

// fs.writeFileSync(archivo, contenido);
// console.log("Se ha escrito en el archivo");

// fs.writeFile(archivo, contenido, (err) => {
//     if (err) throw("Ha ocurrido un error");

//     console.log("Se ha escrito en el archivo");
// });

// const textoAdicional = '\nAquí va otra linea de texto';

// fs.appendFile(archivo, textoAdicional, (err) => {
//     if(err) throw("Ha ocurrido un error");

//     console.log("Se ha escrito en el archivo");
// })
