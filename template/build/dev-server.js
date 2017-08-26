require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = {{#if_or unit e2e}}process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : {{/if_or}}require('./webpack.dev.conf')

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware-hard-disk')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})


var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

// module.exports = {
//   ready: readyPromise,
//   close: () => {
//     server.close()
//   }
// }
