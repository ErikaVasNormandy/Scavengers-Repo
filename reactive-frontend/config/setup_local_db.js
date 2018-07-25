const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


// Connection URL
var url = 'mongodb://localhost:27017/userposts';

// Database Name
const dbName = 'Astral-Highway';

// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/userposts', function(err, db) {
  if (err) throw err;

  console.log("db createdr");




  db.close();
});
