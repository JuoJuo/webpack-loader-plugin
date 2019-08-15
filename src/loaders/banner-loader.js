const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const fs = require('fs');

module.exports = function (source) {
  //把loader改为异步,任务完成后需要手工执行callback
  const cb = this.async();
  //启用loader缓存
  this.cacheable && this.cacheable();
  //用来验证options的合法性
  const schema = {
    type: 'object',
    properties: {
      filename: {
        type: 'string'
      },
      text: {
        type: 'string'
      }
    }
  };

  //通过工具方法获取options
  const options = loaderUtils.getOptions(this);
  //用来验证options的合法性
  validateOptions(schema, options, 'Banner-Loader');

  const {text, filename} = options;
  if (text) {
    cb(null, `/*${text}*/${source}`);
  } else if (filename) {
    fs.readFile(filename, 'utf8', (err, text) => {
      cb(err, `/*${text}*/${source}`);
    });
  }
};
