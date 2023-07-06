const { MongoClient } = require('mongodb');
 let dbConnection;
 module.exports = {
  connectToDb: (cb) => {
    new MongoClient('mongodb://127.0.0.1:27017/bookstore')
      .connect()
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err); 
        cb(err);
      });
  },
  getDb: () => dbConnection,
};