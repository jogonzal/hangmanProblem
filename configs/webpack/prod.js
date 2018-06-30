// production config
const merge = require('webpack-merge');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: 'https://jorgewebdeployment.blob.core.windows.net/etisysonline/',
  },
  devtool: 'source-map'
});
