var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/');
var BUILD_DIR = path.resolve(__dirname, 'public/');


var config = {
      entry: APP_DIR + '/index.jsx',
  output:
  {
    path: BUILD_DIR,
    filename: '/bundle.js'
  },


     devServer: {
        inline: true,
        port: 8081
    },
    module: {
        loaders: [
            {

                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },

             {
                test: /\.css?$/,
                loader: 'css-loader'
            },
            {
              test: /\.ttf$/,
              loader: 'file-loader',
              options: {
   name: 'fonts/[name].[ext]',
 },
            },

            // {
            //   loader: 'file-loader',
            //   query: {
            //     useRelativePath: process.env.NODE_ENV === "production"
            //   }
            // },
//             {
//               test: /\.ttf?$/,
//               loader: 'url-loader',
//                 options: {
//                   limit: 8192
//   },
// }
            ]
    }

}
module.exports = config;
