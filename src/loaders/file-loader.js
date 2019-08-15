/*
* 拷贝文件至目标目录
* 返回这个新的文件名
*
* */

const {getOptions, interpolateName} = require('loader-utils');

function loader(content) {
  debugger
  let options = getOptions(this) || {};

  //interpolateName通过内容计算hash值
  let newFileName = interpolateName(this, options.filename || "[hash:8]", {content});

  const suffix = this.resourcePath.slice(this.resourcePath.lastIndexOf('.'));

  newFileName = newFileName + suffix;

  //发射一个文件 向输出里保存一个文件
  this.emitFile(newFileName, content);

  return `module.exports = ${JSON.stringify(newFileName)}`;
}

loader.raw = true;

module.exports = loader;
