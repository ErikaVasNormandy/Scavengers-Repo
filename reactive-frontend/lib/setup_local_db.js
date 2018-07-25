const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const ObjectID = require('mongodb').ObjectID
// Connection URL
// const url = 'mongodb://localhost:27017';

let db
let url
let posts_db_name = ''
// Database Name
const dbName = 'Astral-Highway';

const MongoDBData = require('../config/projectInfoData.json')['mongoData'] || process.env.MONGODB_URI
if (process.env.NODE_ENV === 'production') {
    url = MongoDBData['productionURL']
    posts_db_name = 'posts'
} else {
    url = MongoDBData['localURL']
    posts_db_name = 'test_posts'
}



MongoClient.connect(url,  (err, dbParam) => {
  assert.equal(null, err)
  console.log('Successfully connected to MongoDB server. ')
  db = dbParam
  db.collection('posts').createIndex(
      {
          'date': 1
      },
      {
          unique: false
      }
  )
  return
})

function getAll(collection, sortParam = {}) {
    return new Promise((resolve, reject) => {
        db.collection(collection).find({}).sort(sortParam).toArray((err, result) => {
            if (err) {
                console.log('err', err)
                return reject(err)
            }
            return resolve(result)
        })
    })
}


function insertOne(collection, obj) {
    return new Promise((resolve, reject) => {
        db.collection(collection).insertOne(obj, (err, result) => {
            if (err) {
                console.log('insertOne err', err)
                return reject(err)
            }
            return resolve(result)
        })
    })
}

function findOne(collection, query) {
    return new Promise((resolve, reject) => {
        db.collection(collection).find(query).toArray((err, result) => {
            if (err) {
                console.log('err', err)
                return reject(err)
            }
            return resolve(result[0])
        })
    })
}


module.exports = {
    getAll,
    insertOne,
}
