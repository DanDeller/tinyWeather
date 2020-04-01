const HtmlWebPackPlugin = require('html-webpack-plugin'),
      webpack = require('webpack'),
      path = require('path');

module.exports = {
  entry: [
  'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/index.js'),
    path.join(__dirname, 'src/styles/style.less')
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
    // new webpack.NoErrorsPlugin(),
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
      }, {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
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
            loader: "less-loader"
          }
        ]
      }, {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      }, {
        test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  }
};