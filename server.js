const webpack = require('webpack'),
			webpackMiddleware = require('webpack-dev-middleware'),
			webpackHotMiddleware = require('webpack-hot-middleware'),
			bodyParser = require('body-parser'),
      express    = require('express'),
      path       = require('path'),
      app        = express();

const isDeveloping = process.env.NODE_ENV !== 'production';
const config = require('./webpack.config.js');

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

app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

//app.get('/', (req, res) => res.sendFile(path.join(__dirname, './src/index.html')));

// tinyWeather uses webpack-dev-server
app.listen(3000, () => console.log('App running on port 3000.'));