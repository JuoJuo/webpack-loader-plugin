let path = require('path');
const DonePlugin = require('./src/plugins/DonePlugin.js');

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
          {
            loader: "banner-loader.js",
            options: {
              // text: '杰哥所有，版权版权',
              filename: path.resolve(__dirname, 'banner.rc')
            }
          },
          'babel-loader2.js',
        ]
      },
      {
        test: /\.png$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     // filename: '',
          //   }
          // },
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 2,
            }
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
          }
        ],
      },
    ]
  },
  plugins: [
    new DonePlugin({name:'jack'})
  ]
};

