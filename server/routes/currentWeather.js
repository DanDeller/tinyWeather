const currentWeather = require('../models/currentWeatherModel'),
      logger = require('../../middleware/logger'),
      express = require('express'),
      currentWeatherRoutes = express.Router();

currentWeatherRoutes.get('/currentWeather', (req, res) => {
  currentWeather.list((error, response) => {
    if (error) return res.end();
    return res.send(response);
  });
});

currentWeatherRoutes.post('/currentWeather', (req, res) => {
  currentWeather.post(req, (error, response) => {
    if (error) return res.end();
    return res.send(response);
  });
});

currentWeatherRoutes.delete('/currentWeather', (req, res) => {
  currentWeather.delete(req, (error, response) => {
    if (error) return res.end();
    return res.send(response);
  });
});

module.exports = currentWeatherRoutes;