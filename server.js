
const express = require('express'),
      bodyParser = require('body-parser'),
      requireDir = require('require-dir'),
      endpoints  = requireDir('./server/endpoints'),
      port = process.env.PORT || 5000,
      app = express(),
      _ = require('lodash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

_.each(endpoints, (name) => {
  app.use(name);
});

app.listen(port, () => console.log('App running on port 5000.'));