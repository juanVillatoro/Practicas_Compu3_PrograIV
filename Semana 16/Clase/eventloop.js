function fFirst(){
    console.log("Primera función");
}

function sSecond(callback){
    setTimeout(() => { //funcion anonima
        console.log("Segunda función");
        callback();
    }, 0);
}

function sThird(){
    console.log("Tercera función");
} 

//Llamado a las funciones
fFirst();
sSecond(sThird);
//sThird();