const webpack = require('webpack');
const wc = require('webpack-config');
const path = require('path');

module.exports = new wc.Config().merge({
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve('./src'),
    historyApiFallback: true,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: true,
    },
    host: '0.0.0.0',
    port: 3100,
    hot: true,
  },
});