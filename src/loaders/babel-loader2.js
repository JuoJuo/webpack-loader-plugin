const babel = require('@babel/core');
const path = require('path');

module.exports = function (source) {
  const result = babel.transform(source,  {
    presets: ['@babel/preset-env'],
    sourceMap: true,
    filename: this.request.split('/').pop()
  });
  return this.callback(null, result.code, result.map);
};

// this里有很多api，获取一些当前loader执行的上下文
// sourceMap是指的webpack虽然打开了devtool，
// 但是babel转换代码，只有babel才知道sourcemap所以需要babel自己生成，并且传递给this.callback

//调试  node --inspect-brk=9222  ./node_modules/webpack-cli/bin/cli.js
//去chrome：//inspect
