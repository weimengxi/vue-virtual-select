const path = require('path');

const appRoot = process.cwd();
const appResolve = path.resolve.bind(path, appRoot);
const webpack = require('webpack');

module.exports = {
  // pages: {
  //   index: {
  //     entry: '.qi/main.js',
  //     template: 'static/index.html',
  //     filename: 'index.html',
  //     title: 'Index Page',
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    noInfo: false,
    // host: 'butcherc.lx.360.net',
    port: 8083
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', appResolve('src/'))

    config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        __DEV__: process.env.NODE_ENV === 'development',
        VERSION: JSON.stringify(require('./package.json').version),
      });
      return definitions;
    });
  },
  pluginOptions: {
  }

};
