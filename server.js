const webpack              = require('webpack'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
			webpackMiddleware    = require('webpack-dev-middleware'),
      isDeveloping         = process.env.NODE_ENV !== 'production'
			bodyParser           = require('body-parser'),
      express              = require('express'),
      config               = require('./webpack.config.js')
      path                 = require('path'),
      app                  = express();

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

app.listen(3000, () => console.log('App running on port 3000.'));