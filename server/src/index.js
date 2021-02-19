const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Inicializaciones
const app = express();
require('./database');

//Configuraciones
app.set('port', 5000);

//middleware => funciones que se requieren antes de que pase a las rutas => procesar datos etc
app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
}));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.raw({ type: 'image/*', limit: '1mb' }));

//Routes
app.use('/', require('./routes/routes'));
app.use('/api', require('./routes/routesApi')); //express va a usar las rutas que se definen en routes


//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});