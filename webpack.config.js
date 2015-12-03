/* eslint-disable */
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: '#inline-source-map',
  entry: './src/index',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('development'),
       }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'atomic-loader?configPath=' + __dirname + '/atomicCssConfig.js!babel-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
}
/* eslint-enable */
