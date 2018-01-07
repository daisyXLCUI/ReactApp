var webpack = require('webpack');
module.exports = {
  entry: './src/app.jsx',
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  devtool: 'source-map', 
  resolve: {    //指定可以被import的文件名后缀
         extensions: ['.js', '.jsx','.sass','.ts']  
     },  
  devServer: {
		inline: true,
		port: 8083
	},
	
  module: {
      rules: [{
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {         
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};