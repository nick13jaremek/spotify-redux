/*
* This configuration file is used by Webpack to build the application files into a bundle.
* It also includes loaders to process different file extensions. Additionally, it runs plugins such as the
* React Hot Loader, which reloads the webpage on the browser immediately upon new changes on the code.*/

var webpack = require('webpack');

module.exports = {
  entry: [ // Load webpac-dev-server and webpack modules. Load index.js as entry point.
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/, // Locate files with .js extension (JavaScript files)
        exclude: /node_modules/,
        loader: 'react-hot!babel' // Use babel first, then react-hot. Babel used due to ES6 syntax.
      },
      {
        test: /\.scss$/, // Locate files with .scss extension (Sass files)
        exclude: /node_modules/, // Exclude node_modules
        loaders: ['style', 'css', 'sass'] // Process files from right to left: .sass, .css and .style
      }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist', // Location for the built files
    publicPath: '/',
    filename: 'bundle.js' // Name of the JS bundle file
  },
  devServer: {
    contentBase: './dist', // Target directory of the build code
    hot: true // Enable hot loader
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Include the React hot loader plugin
  ]
};
