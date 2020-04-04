const r = require('rethinkdb');
const config = require('../../../server.config.js');

const connect = () => r.connect({
  db: 'tinyWeather',
  host: 'rethinkdb',
  port: 8080
}, function(err, conn) {
  console.log(err);
  console.log(conn);
});

export const insert = () => connect(conn).table('currentWeather').insert({
  id: 1,
  title: "Lorem ipsum",
  content: "Dolor sit amet"
}).run(conn).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err)
});
