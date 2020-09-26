module.exports = {
	server: {
		port: 3001
	},
	mongo: {
		connection: 'mongodb+srv://ddeller:admin@cluster0.hf66e.mongodb.net/tinyWeather?retryWrites=true&w=majority',
		db: 'tinyWeather',
		collections: {
			users: 'users', 
			currentWeather: 'currentWeather'
		}
	}
};