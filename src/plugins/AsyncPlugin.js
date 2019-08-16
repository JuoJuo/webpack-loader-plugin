class AsyncPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('AsyncPlugin',function (compilation, callback) {
      setTimeout(function () {
        console.log('在输出资源之前调用的钩子');
        callback();
      }, 3000);
    });

    // compiler.hooks.emit.tapPromise('AsyncPlugin',function (compilation) {
    //   return new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //       resolve();
    //     }, 3000);
    //   });
    // });
  }
}

module.exports = AsyncPlugin;
