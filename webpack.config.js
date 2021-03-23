const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(__dirname, './src/index.html')
  })],
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  }
}
