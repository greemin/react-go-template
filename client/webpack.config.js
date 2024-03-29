const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "public/");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    publicPath: bundlePath,
    path: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: "http://localhost:3000/"
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
