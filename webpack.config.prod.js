const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: 'production',
  entry: './index.ts',
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './H5P.OERMultiChoice/'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/**.json',
          to: '[name][ext]'
        },
        {
          from: 'src/css',
          to: './css/'
        },
        {
          from: 'src/fonts',
          to: './fonts/'
        },
        {
          from: 'src/content',
          to: './content/'
        },
        {
          from: 'src/icon.svg',
          to: '[name][ext]'
        }
      ]
    })
  ]
};
