const loaderUtils = require("loader-utils");

function loader(source) {
  return source;
}

// c://xxx/x/style-loader!c://xxx/x/css-loader!c://xxx/x/less-loader!./index.less
// request:  c://xxx/x/css-loader!c://xxx/x/less-loader!./index.less
loader.pitch = function (request) {
  let style = `
    var style = document.createElement("style");
    style.innerHTML = require(${loaderUtils.stringifyRequest(this, "!!" + request)});
    document.head.appendChild(style);
 `;
  return style;
};

module.exports = loader;
