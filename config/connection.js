var sequelize = require("sequelize");

if(process.env.JAWSDB_URL){
    var sequelize = new sequelize("dmdmd54pl23w23ol", "p6gr26cyqi66ftmj", "t55rnukpbbytoww0",{
        host: "	bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        dialect: "mysql",
        
    
            pool:{
                max: 5,
                min: 0,
                idle: 10000
            }
    
    });
  }
  else{

var sequelize = new sequelize("burger_bitdb", "root", "gwbootcamp",{
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    

        pool:{
            max: 5,
            min: 0,
            idle: 10000
        }

});
  }

module.exports = sequelize;

