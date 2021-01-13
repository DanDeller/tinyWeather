const currentWeather = require('./server/routes/currentWeather'),  
      serverConfig = require('./server.config.js'),
      cookieParser = require('cookie-parser'),
      user = require('./server/routes/user'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      express = require('express'),
      http = require('http'),
      cors = require('cors'),
      app = express();

const port = process.env.PORT || serverConfig.server.port;

mongoose.connect(serverConfig.mongo.connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Connected to mongoose.')
});

app.server = http.createServer(app);
app.set('port', port);
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
require('./middleware/passportConfig')(passport);

app.use('/', currentWeather);
app.use('/', user);

app.listen(port, () => console.log(`Server running on port ${port}`));