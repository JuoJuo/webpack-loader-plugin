let path = require('path');

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  devtool: "sourcemap",
  resolveLoader: {
    modules: [path.resolve(__dirname, 'src', 'loaders'), path.resolve('node_modules') ]
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[
          'babel-loader2.js',
        ]
      }
    ]
  },
};

