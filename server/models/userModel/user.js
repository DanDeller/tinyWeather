const config = require('../../../server.config.js'),
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
      return cb(err);
    })
  },

  post: function(request, cb) {
    const city = request.body;
		this.connect((err, connection) => {
			if (err) return cb(err);
      r.db(config.db.name).table('users')
			.insert({
				id: city.id,
				city: city.city
			})
			.run(connection)
			.then((response) => {
				return cb(null, response);
			})
			.error((error) => {
				return cb(error);
			});
		});
  }
}