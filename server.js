const webpackHotMiddleware = require('webpack-hot-middleware'),
      webpackMiddleware = require('webpack-dev-middleware'),
      isDeveloping = process.env.NODE_ENV !== 'production',
      serverConfig = require('./server.config.js'),
      bodyParser = require('body-parser'),
      requireDir = require('require-dir'),
      endpoints  = requireDir('./server/endpoints'),
      express = require('express'),
      webpack = require('webpack'),
      config = require('./webpack.config.js'),
      path = require('path'),
      app = express(),
      _ = require('lodash');

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/app/index.tpl.html'));
    res.end();
  });
} else {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/app/index.tpl.html'));
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

_.each(endpoints, (name) => {
  app.use(name);
});

app.listen(serverConfig.server.port, () => console.log('App running on port 3000.'));
