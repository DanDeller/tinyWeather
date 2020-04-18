import config from '../../server.config.js';
import r from 'rethinkdb';

export default {
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