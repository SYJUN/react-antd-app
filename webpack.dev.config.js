const webpack = require('webpack');
const wc = require('webpack-config');
const path = require('path');
const WebpackBar = require('webpackbar');

module.exports = new wc.Config().merge({
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar(),
  ],
  devServer: {
    contentBase: path.resolve('./src'),
    historyApiFallback: true,
    disableHostCheck: true,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: true,
    },
    host: 'localhost',
    port: 4000,
    hot: true,
  },
});
