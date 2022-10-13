module.exports = {
  entry: './src/main.js',
  output: {
    path: process.cwd() + './dist',
    filename: 'main.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['latest']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
