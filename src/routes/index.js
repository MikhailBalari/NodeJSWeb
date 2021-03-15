//El archivo index.js creado aquí me permite generar varias rutas dentro del servidor para que luego sean utilizadas importandolas desde mi archivo index.js de la carpeta SRC, que seria el codigo madre.

const express = require('express');
const router = express.Router(); //me permite crear multiples rutas y mantenerlas en archivos por separado

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html')); no lo vamos a utilizar porque vamos a unsar el EJS del motor de plantilla.
    res.render('index.html', { title: 'First Web Site'}); 
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page'});
});

module.exports = router;
