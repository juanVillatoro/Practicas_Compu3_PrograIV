var express = require('express');
var router = express.Router();
const data = require('../userData');
const methods = require('../methods');
const { route } = require('express/lib/application');

//Exportamos fs
var fs = require('fs');
const User = require('../models/user');


//rutas
const registerRoute = '../views/pages/register';
const loginRoute = '../views/pages/login';
//const homeRoute = '../views/pages/home';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Programación Computacional IV' });
});
router.get('/home', function(req, res) {
  if (req.user) {
    res.render('home', { title: "Bienvenido", userName: req.user.fullName });
  } else {
    res.render(loginRoute, {
      message: "Inicie sesión para continuar",
      messageClass: "alert-danger"
    });
  }
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

router.post('/register', async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  try {
    //verificar si los password coinciden
    if (password === confirmPassword) {
      // validar so el correo ya esta registrado
      /*if(data.data.find(dat => dat.email === email)) {
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
      })*/

      //validar si el correo existe

      user = await User.findOne({ email: email })
        .then(user => {
          if (user) {
            res.render(registerRoute, {
              message: "El usuario ya esta registrado",
              messageClass: "alert-danger"
            });
          } else {
            //encriptamos el password
            const hashedPassword = methods.getHashedPassword(password);
            //creamos un nuevo objeto a partir del modelo User
            const userDB = new User({ 'fullName': fullName, 'email': email, 'password': hashedPassword })
            //guardar los datos
            userDB.save()

            res.render(loginRoute, {
              message: "Registro Completo. Inicie sesion",
              messageClass: "alert-success"
            });
          }
        });

    } else {
      res.render(registerRoute, {
        message: "La contraseñas no coinciden",
        messageClass: "alert-danger"
      });
    }
  } catch (error) {
    console.log('error', error);
  }

});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = methods.getHashedPassword(password);

  user = await User.findOne({ email: email, password: hashedPassword })
    .then(user => {
      if (user) {
        const authToken = methods.generateAuthToken();
        // almacenar el token de autenticación
        methods.authTokens[authToken] = user;
        // guardar el token en una cookie
        res.cookie('AuthToken', authToken); //settings token
        res.redirect("/home"); //redirect
      } else {
        res.render(loginRoute, {
          message: "El usuario o contraseña no son validos",
          messageClass: "alert-danger"
        });
      }
    })
});

//logout
router.get('/logout', (req, res) => {
  res.clearCookie('AuthToken');
  return res.redirect('/');
})

module.exports = router;