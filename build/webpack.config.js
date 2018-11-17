const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    resolve:{
        extensions:['.js']
    },
    devServer:{
        contentBase:path.join(__dirname,"../dist")
    },
    entry:{
        app:'./src/app'
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'index.html',
          template: 'index.html'
        })
    ]
}