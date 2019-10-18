const DotEnvJs = require('dotenv-webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const additionalCssLoader = {
  production: MiniCssExtractPlugin.loader,
  development: 'style-loader',
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
      },
      {
        loader: 'eslint-loader',
        options: {
          fix: true,
          emmitError: true,
          configFile: path.resolve(__dirname, './.eslintrc.js'),
        },
      },
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      use: [{
        loader: additionalCssLoader[process.env.NODE_ENV],
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
      ],
    },
    ],
  },
  plugins: [
    new DotEnvJs({
      path: './.env',
    }),
    new HtmlWebpackPlugin({
      title: 'Catalogue',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: process.env.PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
