const bodyParser = require('body-parser'),
      express    = require('express'),
      path       = require('path'),
      app        = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log('Listening on post 3000.');
});
