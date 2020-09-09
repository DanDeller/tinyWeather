const currentWeather = require('./server/routes/currentWeather'),  
      serverConfig = require('./server.config.js'),
      cookieParser = require('cookie-parser'),
      user = require('./server/routes/user'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      dbData = require('./server/db.js'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      express = require('express'),
      http = require('http'),
      cors = require('cors'),
      app = express();

mongoose.connect('mongodb+srv://ddeller:admin@cluster0.hf66e.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Connected to mongoose.')
});

dbData.setDatabaseAndTables();

app.server = http.createServer(app);
app.set('port', serverConfig.server.port);
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'izzy',
  resave: false,
  saveUninitialized: true
}));

app.use(cookieParser('izzy'));

app.use(passport.initialize());
app.use(passport.session());
require('./middleware/passportConfig')(passport);

app.use('/', currentWeather);
app.use('/', user);

app.listen(serverConfig.server.port, () => console.log(`Server running on port ${serverConfig.server.port}`));