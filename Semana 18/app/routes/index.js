var express = require('express');
var router = express.Router();
const data = require('../userData');
const methods = require('../methods');
const { route } = require('express/lib/application');

//Exportamos fs
var fs = require('fs');


//rutas
const registerRoute = '../views/pages/register';
const loginRoute = '../views/pages/login';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Programación Computacional IV' });
});
router.get('/home', (req, res) => {
  res.render('home');
});
router.get('/extra', (req, res) => {
  res.render('extrapage');
});
router.get('/register', (req, res) => {
  res.render(registerRoute)
});

router.get('/login', (req, res) => {
  res.render(loginRoute)
});

router.post('/register', (req, res)=>{
const { fullName, email, password, confirmPassword } = req.body;
//verificar si los password coinciden
if (password === confirmPassword) {
  // validar so el correo ya esta registrado
  if(data.data.find(dat => dat.email === email)) {
    res.render(registerRoute, {
      message: "El usuario ya esta registrado",
      messageClass: "alert-danger"
    });
  }
  //Encriptar el password
  const pHash = methods.getHashedPassword(password);

  //almacenar los datos
  data.data.push({
    fullName,
    email,
    password: pHash
  });

  // guardar el registro en el archivo userData.js

  // Obtenemos los datos
  var registroUser = JSON.stringify(data.data);

  //Agregamos en la variable la estructura del archivo pero insertandole los nuevos registros
  registroUser = `const data = ${registroUser}

  module.exports = {
    data
  }`;

  //Guardamos los datos
  fs.writeFile('./userData.js', registroUser, (err) => {
    if(err) throw err;
  });

  

  res.render(loginRoute, {
    message: "Registro Completo. Inicie sesion",
    messageClass: "alert-success"
  })


} else {
res.render(registerRoute, {
message: "La contraseñas no coinciden",
messageClass: "alert-danger"
});
}

});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const pHash = methods.getHashedPassword(password);

  // constante para comparar los datos, email, password
  // TRUE OR FALSE

  const dataUser = data.data.find(user => {
    return user.email === email && pHash === user.password
  })

  if (dataUser) {
    const authToken = methods.generateAuthToken();

    // almacenar el token de autenticación
    methods.authTokens[authToken] = dataUser;
    // guardar el token en una cookie
    res.cookie('AuthToken', authToken);

    res.redirect("/home");
  } else {
    res.render(loginRoute, {
      message: "El usuario o contraseña no son validos",
      messageClass: "alert.danger"
    })
  }

})

module.exports = router;