module.exports = {
	server: {
		port: 3001
	},
	db: {
		host: process.env.DB_HOST || 'rethinkdb',
		port: process.env.DB_PORT || '28015',
		name: process.env.DB_NAME || 'tinyWeather',
		tables: {
			currentWeather: 'currentWeather',
			users: 'users'
		}
	}
};