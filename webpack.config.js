const path = require('path')
const webpack = require('webpack')
const packageVersion = require('./package.json').version



module.exports = () => {
  return {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: `FlixierSDK.${packageVersion.replace(/\./g, '-')}.js`,
      library: 'FlixierSDK',
      libraryExport: 'default'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                envName: 'production'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin()
    ]
  }
}
