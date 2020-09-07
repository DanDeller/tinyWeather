const requireDir = require('require-dir'),
      endpoints  = requireDir('./server/endpoints/currentWeatherEndpoints'),
      serverConfig = require('./server.config.js'),
      logger = require('./middleware/logger.js'),
      bodyParser = require('body-parser'),
      dbData = require('./server/db.js'), 
      express = require('express'),
      http = require('http'),
      cors = require('cors'),
      _ = require('lodash'),
      app = express();

dbData.setDatabaseAndTables();

app.server = http.createServer(app);
app.set('port', serverConfig.server.port);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

_.each(endpoints, (name) => {
  app.use('/', name);
});

app.listen(serverConfig.server.port, () => console.log(`Server running on port ${serverConfig.server.port}`));