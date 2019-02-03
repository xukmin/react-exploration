module.exports = {
  entry: './jsx/app.jsx',
  output: {
      path: __dirname + '/js/',
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}
