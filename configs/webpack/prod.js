// production config
const merge = require('webpack-merge');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      isLocal: false
    })
  ],
});
