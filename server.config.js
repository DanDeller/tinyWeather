export default {
	server: {
		port: 3000
	},
	db: {
		host: process.env.DB_HOST || 'rethinkdb',
		port: process.env.DB_PORT || '28015',
		name: process.env.DB_NAME || 'tinyWeather',
		tables: {
			currentWeather: 'currentWeather'
		}
	}
};