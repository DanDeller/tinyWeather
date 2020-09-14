const serverConfig = require('../../server.config'),
      MongoClient = require('mongodb').MongoClient,
      logger = require('../../middleware/logger'),
      express = require('express');

const currentWeatherRoutes = express.Router();

MongoClient.connect(serverConfig.mongo.connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(client => {
  const db = client.db(serverConfig.mongo.db);
  const collection = db.collection(serverConfig.mongo.collections.currentWeather);

  currentWeatherRoutes.get('/currentWeather', (req, res) => {
    collection
    .find()
    .toArray()
    .then(result => {
      return res.send(result);
    })
    .catch(err => console.log(err));
  });
  
  currentWeatherRoutes.post('/currentWeather', (req, res) => {
    const { city, id } = req.body;

    collection.insertOne({
      city: city, 
      id: id
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
  });
  
  currentWeatherRoutes.delete('/currentWeather', (req, res) => {
    const { id } = req.body;

    collection.deleteOne({
      id: id
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
  });
}).catch(err => console.log(err));

module.exports = currentWeatherRoutes;