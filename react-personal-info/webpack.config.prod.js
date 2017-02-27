const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src'); // __dirname中的src目录，以此类推
const APP_FILE = path.resolve(APP_PATH, 'index'); // 根目录文件index.js地址
const BUILD_PATH = path.resolve(ROOT_PATH, 'build'); // 发布文件目录
const APP_PUBLIC = path.resolve(ROOT_PATH, 'public');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        index: ['./src/index.js']
    },
    output:{
        path: BUILD_PATH,
        //filename:'[name].js', // 编译后的文件名字
        filename:'boundle.js', // 编译后的文件名字
        publicPath: '/build/', // 编译好的文件，在服务器的路径，是静态资源引用路径
        //chunkFilename: '[name].[chunkhash:5].min.js',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'], // 后缀名自动补全
        alias: {
            CommonComponent: './public/common.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /^node_modules$/,
                loader: 'babel-loader',
                include: APP_PATH,
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: 'style!css!autoprefixer',
                include: APP_PATH,
            },
            {
                test: /\.scss$/,
                exclude: /^node_modules$/,
                loader: 'style!css!autoprefixer!sass!sourceMap',
                include: APP_PATH,
            },
            {
                test: /\.less$/,
                exclude: /^node_modules$/,
                loader: 'style!css!autoprefixer!less',
                include: APP_PATH,
            },
            {
                // exclude:[/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/],
                test: /\.(jpg|png|svg)$/,
                exclude: /^node_modules$/,
                loader: 'url',
                query: {
                    limit: 25000,
                    name: './build/img/[name].[hash:8].[ext]'
                },
                include: APP_PATH,
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /^node_modules$/,
                loader: 'file-loader',
                include: APP_PATH,
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            // process.argv: 当前进程的命令行参数数组。
            // process.env: 指向当前shell的环境变量，如process.env.HOME.
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义编译环境
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin()
    ],
    //devServer: {
    //    contentBase: ROOT_PATH,
    //    noInfo: true,
    //    inline: true,
    //    hot: true,
    //    publicPath: '/build/',
    //    compress: true,
    //    port: 3030,
    //    quiet: true,
    //    watchOptions: {
    //        ignored: /node_modules/
    //    }
    //
    //}
};
