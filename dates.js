const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const url =  'mongodb://localhost:27017/myprojectNode'
const dbName = 'myprojectNode';
var date = new Date();
var d = Date.now();
(async function() {
  
  const client = new MongoClient(url)

  try {
    // Use connect method to connect to the Server
    await client.connect()
     console.log("Connected correctly to server")

    const db = client.db(dbName);
    
    const col = db.collection('data');
    
    
     let r = await db.collection('data').insertMany([{a: new Date()}, {a:3}]);
    assert.equal(2, r.insertedCount);

     const doc = await col.find({}).toArray();
    console.log('doc' , doc)
    
    
    
   
   
  } catch (err) {
    console.log(err.stack)
  }

  client.close()
})()
