const bodyParser = require('body-parser'),
      express    = require('express'),
      path       = require('path'),
      app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './src/index.html'));

// tinyWeather uses webpack-dev-server
// app.listen(8080, () => console.log('App running on port 8080.');