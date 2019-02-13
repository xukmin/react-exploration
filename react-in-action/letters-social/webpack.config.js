module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: __dirname + '/lib/',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(eot|svg|woff|woff2|otf|ttf)$/,
        exclude: /(node_modules)/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /(\.css|\.scss)$/, 
        loader: ['style-loader', 'css-loader?sourcemap', 'sass-loader?sourcemap']
      },
      {
        test: /\.js$/,
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

