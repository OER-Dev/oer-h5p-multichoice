const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  watch: true,
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
          from: 'H5P.OERMultiChoice',
          to: '../../../oer-dev/repos/h5p-oer-multi-choice'
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
          from: 'src/icon.svg',
          to: '[name][ext]'
        }
      ]
    })
  ]
};
