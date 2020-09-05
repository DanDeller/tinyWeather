const config = require('../../../server.config.js'),
			logger = require('../../../middleware/logger.js'),
			r = require('rethinkdb');

module.exports = {
	connect: function(cb) {
		r.connect({
			db: config.db.name,
			host: config.db.host,
			port: config.db.port
		})
		.then((conn) => {
			return cb(null, conn);
		})
		.error((err) => {
			logger.error(`Could not connetct to ${config.db.name}`);
			return cb(err);
		})
	},

	list: function(cb) {
		this.connect((err, conn) => {
			if (err) return cb(err);
			r.db(config.db.name).table('currentWeather')
			.run(conn)
			.then((res) => {
				return res.toArray();
			})
			.then((data) => {
				return cb(null, data);
			})
			.error((err) => {
				logger.error(`Could not find any ${config.db.tables.currentWeather} items.`);
				return cb(err);
			});
		})
	},

	post: function(request, cb) {
		const city = request.body;
		this.connect((err, connection) => {
			if (err) return cb(err);
			r.db(config.db.name).table('currentWeather')
			.insert({
				id: city.id,
				city: city.city
			})
			.run(connection)
			.then((response) => {
				return cb(null, response);
			})
			.error((error) => {
				logger.error(`Error trying to send data to the ${config.db.tables.currentWeather} table.`);
				return cb(error);
			});
		});
	},

	delete: function(request, callback) {
		this.connect((err, connection) => {
			const currentId = request.body.source.id;
			if (err) return callback(err)
			r.db(config.db.name).table('currentWeather')
			.get(currentId)
			.delete()
			.run(connection)
			.then((response) => {
				return callback(null, response);
			})
			.error((error) => {
				logger.error(`Error trying to delete item in the ${config.db.tables.currentWeather} table.`);
				return callback(error);
			});
		});
	}
}