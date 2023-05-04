const express  = require('express')
const path =  require('path')
const morgan = require('morgan')
const config = require('./config')
var  axios =  require('axios')
var cors = require('cors');

const bodyParser = require('body-parser');

const mysql  = require('mysql')
const myConnection = require('express-myconnection')
const app = express()

// importando rutas
const customerRutas =  require('./rutas/customer')
// Asignadndo puertos
const PORT = config.PORT;
//motor de vistas
app.set('view engine','ejs')
app.set("views",path.join(__dirname,'views'))
app.use(cors());
//moddlewares
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host : 'precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'candidatoPrueba',
    password: 'gaspre21.M',
    database : 'prueba',
    multipleStatements: true,
  }))






app.use(express.urlencoded({extended: false}))
app.use(express.json())
// static files
 app.use(express.static(__dirname + '/views/Web'))
//rutas
app.use("/", customerRutas)
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
})
