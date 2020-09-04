const config = require('../server.config.js'),
      async = require('async'),
      r = require('./r.js');

exports.setDatabaseAndTables = () => {
	async.waterfall([
    function connect(callback) {
      r.connect(config.db, callback);
    },
    function createDatabase(connection, callback) {
      r.dbList()
      .contains(config.db.name)
      .do((containsDb) => {
        return r.branch(
          containsDb,
          {created: 0},
          r.dbCreate(config.db.name)
        );
      }).run(connection, (err) => {
        callback(err, connection);
      });
    },

    function createCurrentWeatherTable(connection, callback) {
      r.db(config.db.name)
      .tableList()
      .contains(config.db.tables.currentWeather)
      .do((containsTable) => {
        return r.branch(
          containsTable,
          {created: 0},
          r.db(config.db.name)
          .tableCreate(config.db.tables.currentWeather)
        );
      }).run(connection, (err) => {
        callback(err, connection);
      });
    },

    function createUsersTable(connection, callback) {
      r.db(config.db.name)
      .tableList()
      .contains(config.db.tables.users)
      .do((containsTable) => {
        return r.branch(
          containsTable,
          {created: 0},
          r.db(config.db.name)
          .tableCreate(config.db.tables.users)
        );
      })
      .run(connection, (err) => {
        callback(err, connection);
      });
    },

    function createCurrentWeatherIndex(connection, callback) {
      r.db(config.db.name)
      .table(config.db.tables.currentWeather)
      .indexList()
      .contains('createdAt')
      .do((hasIndex) => {
        return r.branch(
          hasIndex,
          {created: 0},
          r.db(config.db.name)
          .table(config.db.tables.currentWeather)
          .indexCreate('createdAt')
        );
      }).run(connection, (err) => {
        callback(err, connection);
      });
    },

    function createUsersIndex(connection, callback) {
      r.db(config.db.name)
      .table(config.db.tables.users)
      .indexList()
      .contains('createdAt')
      .do((hasIndex) => {
        return r.branch(
          hasIndex,
          {created: 0},
          r.db(config.db.name)
          .table(config.db.tables.users)
          .indexCreate('createdAt')
        );
      })
      .run(connection, (err) => {
        callback(err, connection);
      });
    },

    function waitForCurrentWeatherIndex(connection, callback) {
      r.db(config.db.name)
      .table(config.db.tables.currentWeather)
      .indexWait('createdAt')
      .run(connection, (err) => {
        callback(err, connection);
      });
    },

    function waitForUsersIndex(connection, callback) {
      r.db(config.db.name)
      .table(config.db.tables.users)
      .indexWait('createdAt')
      .run(connection, (err) => {
        callback(err, connection);
      });
    }
  ], (err) => {
    if(err) {
      console.error(err);
      process.exit(1);
      return;
    }
  });
};