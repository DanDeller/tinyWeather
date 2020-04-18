import HtmlWebPackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/index.js'),
    path.join(__dirname, 'src/assets/styles/style.less')
  ],
  output: {
    path: path.join(__dirname, '/src/'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader?attrs[]=video:src'
          }
        ]
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
             loader: 'style-loader' 
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          { 
            loader: 'less-loader' 
          }
        ]
      }, 
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      }, 
      {
        test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  }
};