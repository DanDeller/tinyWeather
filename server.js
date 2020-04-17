import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';
import bodyParser from 'body-parser';
import express from 'express';
import config from './webpack.config.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import lodash from 'lodash';

// import endpoints from './server/endpoints.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const isDeveloping = process.env.NODE_ENV !== 'production';
const { each } = lodash;

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

// _.each(endpoints, (name) => {
//   app.use(name);
// });

app.listen(3000, () => console.log('App running on port 3000.'));