/*
* 设置阀值，小于这个值的话，把这个图片编程base64
* 大于还是使用file loader
* */
const mime = require('mime');
const {getOptions, interpolateName} = require('loader-utils');

function loader(content) {
  const options = getOptions(this) || {};

  let { limit } = options;

  if (limit) {
    limit = parseInt(limit);
  }

  const type = mime.getType(this.resourcePath);

  if (limit && content.length < limit) {
    const base64 = `data:${type};base64,${content.toString('base64')}`;
    return `module.exports = ${JSON.stringify(base64)}`;
  } else {
    return require('./file-loader').call(this, content);
  }
}

loader.raw = true;

module.exports = loader;
