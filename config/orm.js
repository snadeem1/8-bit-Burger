var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    password: "gwbootcamp",
    database: "quotes_db"
});

connection.connect(function(err){
    if(err){
        return;
    }

    console.log("connected at port " + connection.threadId);
});

var orm = {

    select: function(col, table, cb)
    {

        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [col, table], function(err, result){
                if(err)throw err;


              console.log(result);  


              cb(err, result);

        });


    },

    update: function(tableInput, condition, cb){
      connection.query('UPDATE '+tableInput+' SET chosen=true WHERE id='+condition+';', function(err,result){
      if(err)throw err;
      cb(result);
      })
    }
}

module.exports = orm;

