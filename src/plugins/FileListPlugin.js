class FileListPlugin{
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', (compilation) =>{
      let fileList='## 文件列表';

      fileList = Object.keys(compilation.assets).reduce((fileList,filename) => fileList + '\r\n- ' + filename, fileList);

      compilation.assets[this.options.name? this.options.name: 'fileList.md'] = {
        source() {
          return fileList;
        },
        size() {
          return fileList.length
        }
      }
    });
  }
}
module.exports=FileListPlugin;
