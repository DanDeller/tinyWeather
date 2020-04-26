const config = require('../server.config.js'),
      async = require('async'),
      r = require('./r.js');

exports.setDatabaseAndTables = function() {
	async.waterfall([
    function connect(callback) {
      r.connect(config.db, callback);
    },
    function createDatabase(connection, callback) {
      // Create the database if needed.
      r.dbList().contains(config.db.name).do(function(containsDb) {
        return r.branch(
          containsDb,
          {created: 0},
          r.dbCreate(config.db.name)
        );
      }).run(connection, function(err) {
        callback(err, connection);
      });
    },
    // function createTable(connection, callback) {
    //   // Create the tables if needed.
    //   r.tableList().contains('currentWeather').do(function(containsTable) {
    //     return r.branch(
    //       containsTable,
    //       {created: 0},
    //       r.tableCreate('currentWeather')
    //     );
    //   }).run(connection, function(err) {
    //     callback(err, connection);
    //   });
    // },
    // function createIndex(connection, callback) {
    //   // Create the indexes if needed.
    //   r.table('tasks').indexList().contains('createdAt').do(function(hasIndex) {
    //     return r.branch(
    //       hasIndex,
    //       {created: 0},
    //       r.table('tasks').indexCreate('createdAt')
    //     );
    //   }).run(connection, function(err) {
    //     callback(err, connection);
    //   });
    // },
    // function waitForIndex(connection, callback) {
    //   // Wait for the index to be ready.
    //   r.table('tasks').indexWait('createdAt').run(connection, function(err, result) {
    //     callback(err, connection);
    //   });
    // }
  ], function(err, connection) {
    if(err) {
      console.error(err);
      process.exit(1);
      return;
    }
  });
};