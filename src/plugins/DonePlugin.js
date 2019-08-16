class DonePlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap('DonePlugin', ()=> {
      console.log('打包完成后的回调，包括文件变化后再打包的情况--', this.options.name);
    });
  }
}

module.exports = DonePlugin;
