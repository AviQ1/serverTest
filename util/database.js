
const Sequelize = require('sequelize');


//if in production mode database connection string is from enviroment varaibles
let sequelize ;
if (process.env.NODE_ENV === 'production'){
     //sequelize = new Sequelize('test',process.env.RDS_USERNAME,process.env.RDS_PASSWORD,{dialect:'postgres', host:process.env.RDS_HOSTNAME });
     sequelize = new Sequelize('test_db','postgres','Aa123456',{dialect:'postgres', host:'aatcgcgyxwa8a8.cywto99mqnpk.us-east-1.rds.amazonaws.com'});
}
//else connect via localhost
else 
 sequelize = new Sequelize('test_db','postgres','Aa123456',{dialect:'postgres', host:'aatcgcgyxwa8a8.cywto99mqnpk.us-east-1.rds.amazonaws.com'});
     //sequelize = new Sequelize('intellident','postgres','Aa123456',{dialect:'postgres', host:'localhost'});

module.exports = sequelize;