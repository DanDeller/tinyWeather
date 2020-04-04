const express = require('express');
const router = express.Router();
const currentWeather = require('../models/currentWeather');

router.get('/currentWeathereather', (req, res) => {
	currentWeather.list((error, response) => {
		if (error) return res.end();
		return res.send(response);
	});
});

module.exports = router;