var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    'react-tabtab':[
      'webpack-dev-server/client?http://localhost:5000',
      'webpack/hot/only-dev-server',
      './index'
    ],
    'test': [
      'webpack-dev-server/client?http://localhost:5000',
      'webpack/hot/only-dev-server',
      './test'
    ]
  }
  ,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }, 
      {
        test: /\.css?$/,
        loaders: ['style', 'raw']
      }
    ]
  }
};
