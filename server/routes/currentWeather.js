const currentWeather = require('../models/currentWeatherModel'),
      serverConfig = require('../../server.config.js'),
      MongoClient = require('mongodb').MongoClient,
      logger = require('../../middleware/logger'),
      express = require('express');

const currentWeatherRoutes = express.Router();

currentWeatherRoutes.get('/currentWeather', (req, res) => {
  MongoClient.connect(serverConfig.mongo.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    const db = client.db(serverConfig.mongo.db);
    const collection = db.collection(serverConfig.mongo.collections.currentWeather);

    collection
    .find()
    .toArray((err, items) => {
      return res.send(items);
    });
  });
});

currentWeatherRoutes.post('/currentWeather', (req, res) => {
  MongoClient.connect(serverConfig.mongo.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    const db = client.db(serverConfig.mongo.db);
    const collection = db.collection(serverConfig.mongo.collections.currentWeather);
    const { city, id } = req.body;

    collection.insertOne({
      city: city, 
      id: id
    }, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });
});

currentWeatherRoutes.delete('/currentWeather', (req, res) => {
  MongoClient.connect(serverConfig.mongo.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    const db = client.db(serverConfig.mongo.db);
    const collection = db.collection(serverConfig.mongo.collections.currentWeather);
    const { id } = req.body;

    collection.deleteOne({
      id: id
    }, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });
});

module.exports = currentWeatherRoutes;