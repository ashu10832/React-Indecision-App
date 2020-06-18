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
        test: /\.js$/,
        exclude:/node_modules/,
        use: ["babel-loader"]
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader','sass-loader'],

        }]
      },
    devtool:'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      watchContentBase: true,
      port: 9000
    }

}

