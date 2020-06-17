const path = require('path')


// entry -> output

module.exports = {
    entry:'./src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    mode: 'development',
    module:{
      rules:[{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude:/node_modules/
        }]
      }

}

