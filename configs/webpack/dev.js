// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    './index.tsx' // the entry point of our app
  ],
  output: {
    publicPath: 'http://localhost:8080/',
  },
});
