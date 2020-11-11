const express = require('express');
const bodyParser = require('body-parser');
//const sequelize = require('../serverTest/util/database');
//const Sequelize=require('sequelize');
const path = require('path');
const firstRoute = require('./routes/firstRoute');
const errorRoute = require('./routes/notFound');
const dbInitRoute = require('./routes/dbInit');
const dataRoute = require('./routes/getData');
const insertRoute = require('./routes/insertData');
/*const Books = require('./models/book');
const Readers = require('./models/readers');
const Loans = require('./models/loan');*/


//set port
const  port= (process.env.PORT === undefined ? 3000 : process.env.PORT) ;
console.log("test logs writing ");

const app = express();
app.use(bodyParser.json()); // application/json 
//allow cross origin acces
app.use((req,res,next) =>{
  console.log("SET ACCESS CONTROL HEADERS ");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.use('/data', dataRoute);
  app.use('/init', dbInitRoute);
  app.use('/insert',insertRoute);
  app.use(firstRoute);
  app.use('*',errorRoute);


  app.listen(port);
