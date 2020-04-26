module.exports = require('rethinkdbdash')({
  servers: [
    {host: 'rethinkdb', port: 28015}
  ],
  host: process.env.RETHINKDB_PORT_28015_TCP_ADDR || '127.0.0.1',
  port: process.env.RETHINKDB_PORT_28015_TCP_PORT || 28015,
  db: 'tinyWeather'
});