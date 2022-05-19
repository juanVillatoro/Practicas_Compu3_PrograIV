var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Programación Computacional IV');
});

app.route('/test').get(function(req, res){
    res.send("Pagina de prueba")
});

var server = app.listen(3000, function(){});