const currentWeather = require('../../models/currentWeatherModel/currentWeather'),
      express = require('express'),
      router = express.Router();

router.get('/currentWeather', (req, res) => {
  currentWeather.list((error, response) => {
    if (error) return res.end();
    return res.send(response);
  });
});

router.post('/currentWeather', (req, res) => {
  currentWeather.post(req, (error, response) => {
    if (error) return res.end();
    return res.send(response);
  });
});

router.delete('/currentWeather', (req, res) => {
  currentWeather.delete(req, (error, response) => {
    if (error) return res.end();
    return res.send(response);
  });
});

module.exports = router;