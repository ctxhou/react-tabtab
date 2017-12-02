const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    root: [
      'babel-polyfill',
      './docs/root'
    ]
  },
  output: {
    path: path.join(__dirname, '_gh-pages'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  externals: {
    'react': "React",
    'react-dom': "ReactDOM"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunk: 2,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      production: true,
      template: 'docs/index.ejs',
      title: 'React tabtab - Make your react tab dance',
      googleAnalytics: {
        trackingId: 'UA-54035195-6',
        pageViewOnLoad: true
      }
    }),
    new UglifyJSPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}