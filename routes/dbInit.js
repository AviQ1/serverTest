//const util = require('util');
const express = require('express');
const router = express.Router();
const sequelize = require('../util/database');

const Books = require('../models/book');
const Readers = require('../models/readers');
const Loans = require('../models/loan');
//const Sequelize=require('sequelize');


// const rootDir = require('../util/path');
//const PATH= require('path');

// let sequelize;
// if (process.env.NODE_ENV === 'production'){
//      //sequelize = new Sequelize('test',process.env.RDS_USERNAME,process.env.RDS_PASSWORD,{dialect:'postgres', host:process.env.RDS_HOSTNAME });
//      sequelize = new Sequelize('test_db','postgres','Aa123456',{dialect:'postgres', host:'aatcgcgyxwa8a8.cywto99mqnpk.us-east-1.rds.amazonaws.com'});
// }
// //else connect via localhost
// else 
//  sequelize = new Sequelize('test_db','postgres','Aa123456',{dialect:'postgres', host:'aatcgcgyxwa8a8.cywto99mqnpk.us-east-1.rds.amazonaws.com'});
//      //sequelize = new Sequelize('intellident','postgres','Aa123456',{dialect:'postgres', host:'localhost'});

// OrderItem.associate(Order);
// OrderItem.belongsTo(Order);
// OrderSubTypesMD.belongsTo(OrderTypesMD);
//TODO: add order item and header constraint and check if key changes
router.get('/createTables', (req,response, next) =>{
  
  //Readers.belongsToMany(Books, {through: 'loans'});
//Books.belongsToMany(Readers, {through: 'loans'});
    console.log('goind to create tables');
    sequelize.sync({ force: true }).then( result =>{ ///chango to alter:true in order to allow change tables
        console.log ('tables created successfully');
        response.status(201).end('tables created successfully');
        //console.log(result);o
      });
    
});




// router.get('/syncStagesMd', (req, res, next) =>{

//   let stages  = [];
//   let orderStagesTypes = [];



//   let workbook1;
//   try{
//   //load xlsx MD file
//   const  excelPath = PATH.join(rootDir,'/staticFiles/master_data/MD_INITIAL.xlsx');
//   console.log ('the file pat111h ' +PATH.join(rootDir,'/staticFiles/master_data/MD_INITIAL.xlsx'));
  

//   workbook1 =  XLSX.readFile(excelPath);
//   }
//   catch(err){
//     console.log("failed to read filr");
//   }
//   try{
//     //convert every xlsx sheet into json
//     var sheet_name_list = workbook1.SheetNames;
//     console.log(XLSX.utils.sheet_to_json(workbook1.Sheets['OrderStagesMD'], {defval: ""}));
//     stages  =  XLSX.utils.sheet_to_json(workbook1.Sheets['OrderStagesMD'], {defval: ""});
//     orderStagesTypes  =  XLSX.utils.sheet_to_json(workbook1.Sheets['OrderStagesTypes'], {defval: ""});
    
//   }
//   catch(err2){
//     console.log('failed to convert to json');
//     console.log('failed to convert xlsx to json '+err2);
//     res.end('failed to convert xlsx to json '+err2);
//   }
  

//   const initData= [];

//   //insert all data into tables

//   initData.push(OrderStagesMD.bulkCreate(stages));
//   initData.push(OrderStagesTypes.bulkCreate(orderStagesTypes));

//   //wait for all data to be inserted
//   Promise.all(initData).then(resutl =>{
  
//   res.status(201).end('stages MD inserted ')
//     }).catch(err =>{
//       res.end("failed to insert " + err);
// });

//   // ColorsMD.bulkCreate(colors).then(result =>{
//   //   return ColorsMD.findAll();
//   // }).then( result =>{
//   //   console.log(result);
//   //   res.json(result);
//   // })

//   // .catch(error =>{
//   //   res.end("failed to insert "+ error);

//   // })
 

// })

// router.get('/insertMasterData',  (req,res, next) =>{

//   let stages  = [];
//   let colors = [];
//   let orderTypesData = [];
//   let orderSubtypesData = [];
//   let orderStagesTypes = [];
//   let entities = [];
//   let entityType = [];
//   let users = [];
//   let userEntity = [];
//   let clinicLabs = [];


//   let workbook1;
//   try{
//   //load xlsx MD file
//   const  excelPath = PATH.join(rootDir,'/staticFiles/master_data/MD_INITIAL.xlsx');
//   console.log ('the file pat111h ' +PATH.join(rootDir,'/staticFiles/master_data/MD_INITIAL.xlsx'));
  

//   workbook1 =  XLSX.readFile(excelPath);
//   }
//   catch(err){
//     console.log("failed to read filr");
//   }
//   try{
//     //convert every xlsx sheet into json
//     var sheet_name_list = workbook1.SheetNames;
//     console.log(XLSX.utils.sheet_to_json(workbook1.Sheets['OrderStagesMD'], {defval: ""}));
//     stages  =  XLSX.utils.sheet_to_json(workbook1.Sheets['OrderStagesMD'], {defval: ""});
//     orderStagesTypes  =  XLSX.utils.sheet_to_json(workbook1.Sheets['OrderStagesTypes'], {defval: ""});
//     entities  =  XLSX.utils.sheet_to_json(workbook1.Sheets['Entities'], {defval: ""});
//     colors  =  XLSX.utils.sheet_to_json(workbook1.Sheets['ColorsMD'], {defval: ""});
//     orderTypesData  =  XLSX.utils.sheet_to_json(workbook1.Sheets['OrderTypesMD'], {defval: ""});
//     orderSubtypesData  =  XLSX.utils.sheet_to_json(workbook1.Sheets['OrderSubtypseMD'], {defval: ""});
//     entityType  =  XLSX.utils.sheet_to_json(workbook1.Sheets['EtityType'], {defval: ""});
//     users = XLSX.utils.sheet_to_json(workbook1.Sheets['Users'], {defval: ""});
//     userEntity = XLSX.utils.sheet_to_json(workbook1.Sheets['UserEntityLinks'], {defval: ""});
//     clinicLabs = XLSX.utils.sheet_to_json(workbook1.Sheets['ClinicLabLink'], {defval: ""});
//   }
//   catch(err2){
//     console.log('failed to convert to json');
//     console.log('failed to convert xlsx to json '+err2);
//     res.end('failed to convert xlsx to json '+err2);
//   }
  

//   const initData= [];

//   //insert all data into tables
//   initData.push(ColorsMD.bulkCreate(colors));
//   initData.push(Entity.bulkCreate(entities));
//   initData.push(EtityType.bulkCreate(entityType));
//   initData.push(OrderStagesTypes.bulkCreate(orderStagesTypes));
//   initData.push(OrderTypesMD.bulkCreate(orderTypesData));
//   initData.push(OrderSubTypesMD.bulkCreate(orderSubtypesData));
//   initData.push(OrderStagesMD.bulkCreate(stages));
//   initData.push(User.bulkCreate(users));
//   initData.push(UserEntityLinks.bulkCreate(userEntity));
//   initData.push(ClinicLabLinks.bulkCreate(clinicLabs));
//   //wait for all data to be inserted
//   Promise.all(initData).then(resutl =>{
  
//   res.status(201).end('MD inserted ')
//     }).catch(err =>{
//       res.end("failed to insert " + err);
// });

//   // ColorsMD.bulkCreate(colors).then(result =>{
//   //   return ColorsMD.findAll();
//   // }).then( result =>{
//   //   console.log(result);
//   //   res.json(result);
//   // })

//   // .catch(error =>{
//   //   res.end("failed to insert "+ error);

//   // })
 

// });

module.exports = router;
