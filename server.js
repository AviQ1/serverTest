const bodyParser = require('body-parser');
const express = require('express');
//const sequelize = require('./util/database');
//const Sequelize=require('sequelize');
const path = require('path');
const firstRoute = require('./routes/firstRoute');
const errorRoute = require('./routes/notFound');
const dbInitRoute = require('./routes/dbInit');


//set port
const  port= (process.env.PORT === undefined ? 3000 : process.env.PORT) ;


const app = express();
app.use(bodyParser.json()); // application/json 
//allow cross origin acces
app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.use('/init', dbInitRoute);
  app.use(firstRoute);
  app.use('*',errorRoute);


  app.listen(port);
