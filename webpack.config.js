const path = require('path');
const wc = require('webpack-config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const themeConf = require('./webpack.theme.config');


const devMode = process.env.NODE_ENV !== 'production';
const env = devMode ? 'dev' : 'prod';

module.exports = new wc.Config().extend(`./webpack.${env}.config.js`).merge({
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  target: 'web',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@core': path.resolve(__dirname, 'core'),
    },
  },
  externals: {
    lodash: '_',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: { cacheDirectory: true },
        }],
      },
      {
        test: /\.scss$/,
        use: [
          // development 模式使用 style-loader，因为可以支持 HMR
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              modifyVars: themeConf(),
              javascriptEnabled: true,
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
});