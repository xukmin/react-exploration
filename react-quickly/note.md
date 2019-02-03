- For babel-loader 8+, it requires Babel 7.x,, which is to be installed as the '@babel/core' package instead of 'babel-core'.

- There is no guarantee of compatibility across versions between Babel 6 and Babel 7.

- For Babel 7, the packages have different names.
'@babel/core'
'@babel/cli'
'@babel/preset-react'

- In webpack.config.js'loaders' is used in Webpack 1, and 'rules' in Webpack2.
