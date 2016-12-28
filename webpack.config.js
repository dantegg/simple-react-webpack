var path = require('path')
var webpack = require('webpack')

module.exports = {
    //devtool: 'cheap-module-eval-source-map',
    entry: [
       //'webpack-hot-middleware/client',
        path.join(__dirname,'./client/app')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    externals:{
        'react':'React',
        'react-dom':'reactDom'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output:{
                comments:false
            }
        })
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:['es2015','react']
                    }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    }
}
