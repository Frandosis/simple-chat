
const mongoose = require("mongoose");
const Server = require("../models/server")
mongoose.connect("mongodb://localhost:27017/simplechat", { useNewUrlParser: true, useUnifiedTopology: true });

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'simplechat';

var query = [];

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('server');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    query = docs;
    callback(docs);
  });
}


// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findDocuments(db, function() {
    client.close();
  });
});


var express = require('express');
var router = express.Router();
router.use(express.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api', { title: 'API' });
});

router.get('/server', function(req, res, next) {
  res.send(query);
});

module.exports = router;
