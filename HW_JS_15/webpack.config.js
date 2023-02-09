const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'development',
    entry: './src/index.js',  //не працює через path.resolve (__dirname, "src/index.js")
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: '[name].js',
    },
    devServer: {
        static:{
            directory: path.resolve(__dirname , 'dist')
        },
        open: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader, 
                "css-loader"
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env']
                ]
              }
            }
          },
          {
            test: /\.(png|svg|jpg|jpeg)$/i,
            type: 'assets/resource'
          },
        ],
      },
}