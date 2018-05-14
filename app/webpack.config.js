var debug = process.env.NODE_ENV === "production";
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: /src/,
      exclude: /node_modules/,
      use: {loader: "babel-loader", options: {presets: ['react', 'es2015', 'stage-1']}}},
      {test: /\.html$/, use: ['html-loader']}, 
      {test: /\.(png|jpg|gif)$/, use: [{loader: 'file-loader'}]},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}]},
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './',
    proxy: {
    '^/api/*': {
      target: 'http://localhost:3000/api/',
      secure: false
    }
  }
  },
  plugins: debug ? [] : [
    new webpack.HotModuleReplacementPlugin({
    multiStep: true
    })
  ]
};



// [
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify('production')
//       }
//     })
//   ]
