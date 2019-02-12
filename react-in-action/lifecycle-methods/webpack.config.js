module.exports = {
  mode: 'development',
  entry: './jsx/app.jsx',
  output: {
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            {
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          ]
        }
      }

    ] // end of rules
  }
}

