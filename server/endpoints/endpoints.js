import currentWeather from '../models/currentWeather.js';
import express from 'express';

const router = express.Router();

router.get('/currentWeather', (req, res) => {
	currentWeather.list((error, response) => {
		if (error) return res.end();
		return res.send(response);
	});
});

export default router;