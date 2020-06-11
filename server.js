
const express = require('express');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const endpoints  = requireDir('./server/endpoints');
const app = express();
const _ = require('lodash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/currentWeather', (req, res) => {
//   res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
// });

_.each(endpoints, (name) => {
  app.use(name);
});

app.listen(port, () => console.log('App running on port 5000.'));