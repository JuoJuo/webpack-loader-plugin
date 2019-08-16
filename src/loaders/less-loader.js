const less = require('less');

module.exports = function (source) {
  let callback = this.async();
  less.render(source, { filename: this.resource }, (err, output) => {
    this.callback(err, output.css);
  });
};
