const connectionString = process.env.MONGO_URI,
      mongoose = require('mongoose');

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;