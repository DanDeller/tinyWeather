const currentWeather = require('../models/currentWeather'),
			express        = require('express'),
			router         = express.Router();

export default router.get('/currentWeather', (req, res) => {
	currentWeather.list((error, response) => {
		if (error) return res.end();
		return res.send(response);
	});
});

// export default router;