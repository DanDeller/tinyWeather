const config = require('../../server.config.js'),
      r = require('rethinkdb');

const userModel = {
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
	
	createUser: function(request, cb) {
		const {username, password} = request.body;
		
		this.connect((err, connection) => {
			if (err) return cb(err);
			r.db(config.db.name)
			.table('users')
			.insert({
				username: username,
				password: password
			})
			.run(connection)
			.then((response) => {
				return cb(null, response);
			})
			.error((error) => {
				return cb(error);
			});
		});
	},
	
	getUserByEmail: function(request, isUnique) {
		const username = request.body.username.trim();

		this.connect((err, conn) => {
			if (err) return cb(err);
			r.db(config.db.name)
			.table('users')
			.filter({username: username})
			.coerceTo('array')
			.run(conn)
			.then((response) => {
				console.log(response);
				if (response.length && isUnique) {
					console.log('email exists')
					throw new Error(`email address "${username}" is already in use.`);
				}

				if (response.length === 0 && !isUnique) {
					console.log('where you at?')
					throw new Error(`unable to locate account for ${username}.`);
				}

				return { 
					data: response[0] 
				};
			})
			.catch((error) => {
				throw new Error(error, 'message', error);
			});
		});
	}
};

module.exports = userModel;