require('dotenv').config({path: './config/dot.env'});

const currentWeather = require('./server/routes/currentWeather'),
      cookieParser = require('cookie-parser'),
      user = require('./server/routes/user'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      express = require('express'),
      cors = require('cors'),
      db = require('./db'),
      app = express();

const port = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
  secret: 'izzy', // session secret
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
require('./middleware/passportConfig')(passport);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', currentWeather);
app.use('/', user);

app.listen(port, () => console.log(`Server running on port ${port}`));