module.exports = {
	server: {
		port: 3001
	},
	mongo: {
		connection: 'mongo-address-info',
		db: 'tinyWeather',
		collections: {
			users: 'users', 
			currentWeather: 'currentWeather'
		}
	}
};