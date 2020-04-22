  const config = require('../../server.config.js'),
        r      = require('rethinkdb');

module.exports = {
  connect: function(cb) {
    r.connect({
      db: config.db.name,
      host: config.db.host,
      port: config.db.port
    }).then((conn) => {
      return cb(null, conn);
    }).error((err) => {
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
        return cb(err);
      });
    })
  }
}