const express = require ('express'); 
const app = express();
const path = require ('path');

//Settings
app.set('port', 3000);
app.set('view engine', 'ejs'); //seteo en la app el motor de la plantilla y elijo a EJS
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);


//middleware, son rutas que se ejecutan antes de el preceso original solicitado.

//routes
app.use(require('./routes/index')); //app.use me permite usar la importacion de las rutas que cree en mi archivo index.js que se encuentra en la carpeta routes.

//static files, esta carpea public me permite acceder a los archivos que contiene desde el navegador
app.use(express.static(path.join(__dirname, 'public')));

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});



