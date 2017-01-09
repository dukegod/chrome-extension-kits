
// const webpack = require('webpack');
const path = require('path');

// console.log(__dirname);

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/scss')]
  },
  resolve:{
    alias: {
      js: path.join(__dirname, './src/js')
    },
    extensions: ['', '.js']
  }
}