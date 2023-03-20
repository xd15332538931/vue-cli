const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loader编译vue文件
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin') // 设置打包进度条
const Dotenv = require('dotenv-webpack'); // 支持程序获取.env配置的环境变量
console.log('222', process.env.NODE_ENV)
module.exports = {
    mode: process.env.NODE_ENV === 'prod' ? "production" : "development",                     // 开发模式
    entry: './src/main.js',                   // 入口文件，把src下的main.js编译到出口文件
    output: {                                 // 出口文件
        path: path.resolve(__dirname, 'dist'),   // 出口路径和目录
        filename: "[name].js",                 // 编译后的名称
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack搭建vue项目111',
            template: './publish/index.html'
        }),
        new VueLoaderPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
        }),
        new ProgressBarWebpackPlugin(
            {
                complete: "█",
                clear: true
            }
        )
    ],
    optimization: {
        nodeEnv: false
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
                generator: {
                    filename: 'images/[base]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset',
                generator: {
                    filename: 'files/[base]',
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                type: 'asset',
                generator: {
                    filename: 'media/[base]',
                },
            },
            {
                test: /\.(ts|js)x?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
        ]
    },
    resolve: {  // 此配置用在引用文件时
        extensions: ['.js', '.vue', '.json'],  // 引入路径是不用写对应的后缀名
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',        // 正在使用的是vue的运行时版本，而此版本中的编译器是不可用的，我们需要把它切换成运行时 + 编译的版本
            '@': path.resolve(__dirname, '../src'), // 用@直接指引到src目录下
        }
    },

}
