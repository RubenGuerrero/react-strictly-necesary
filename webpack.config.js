const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: {
    js: './app.js',
    vendor: ['react']
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader'
      ]
    }]
  }
}