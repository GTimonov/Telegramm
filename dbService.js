var mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/telegram";


function getBots(){
    result = [];
    mongoClient.connect(url, function(err, db){
      
        if(err){return console.log(err)};
        
        db.collection("bots").find().toArray(function (err, results){
            console.log(results);
            result = results;
            db.close();
        });

    });
    return result;
}

module.exports.getBots = getBots;