const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//用来自动生成index.html文件的包
const CleanWebPackPlugin = require('clean-webpack-plugin')//用来清理文件的包
const ManifestPlugin = require('webpack-manifest-plugin')//用来生成所有引用文件的JSON清单
module.exports = {
  entry: {
    app:'./src/index.js',
    print:'./src/print.js'
  },
  plugins:[
        new HtmlWebpackPlugin({
        title: 'WebpackDemo'
      }),
        new CleanWebPackPlugin(['dist']),
        new ManifestPlugin({
        fileName:'my-manifest.json',
        basePath:'/dist/',
        seed:{ 
            name:'My Manifest' 
         } 
        })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
    {
        test:/\.css$/,
        use:[
            'style-loader',
            'css-loader'
        ]
    },
    {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
            'file-loader'
        ]
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
    }
    ]
  }
};