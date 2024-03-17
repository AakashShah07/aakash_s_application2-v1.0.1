// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const config = require('./src/config');

module.exports = {
  // Your webpack configuration settings...
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_ENDPOINT: JSON.stringify(config.API_ENDPOINT),
      },
    }),
  ],
};
