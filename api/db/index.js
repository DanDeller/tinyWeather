const connectionString = process.env.MONGO_URI,
      mongoose = require('mongoose');

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to Mongoose.');
}).catch(e => {
  if (e) {
    console.error('Connection error', e.message);
  };
});

const db = mongoose.connection;

module.exports = db;