var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

//Declarar una variable para contar los usuarios conectados
var client = 0;


io.on('connection', (socket) => {
    client++;
    io.sockets.emit('broadcast', {
        information: client + ' clientes conectados'
    });
    console.log('Un usuario se ha conectado');
    socket.on('disconnet', ()=> {
        client++;
        io.socket.emit('broadcast', {
            information: client + ' clientes conectados'
        })
    })

    console.log('Un usuario se ha conectado');

    //Recibir datos del cliente
    socket.on('clientEvent', (data) => {
        console.log(data);
    })

    //Tiempo de espera
    setTimeout(() => {
        socket.send('Mensaje despues de 4 segundos')
    }, 4000); //Tiempo de espera en milisegundos

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    })
});

http.listen(3000, ()=>{
    console.log('Escuchando puerto: 3000');
})