'use strict';


/*
 * Imports
 */
const webpack = require("webpack");

/*
 * Plugins
 */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



/*
 * Main
 */
module.exports = {
    mode: "development",
    context: `${__dirname}/src/`,
    entry: {
        hoot: './hoot.js'
    },
    output: {
        path: `${__dirname}/build/`,
        filename: "[name].js",
        library: 'Hoot',
        libraryTarget: 'umd',
        sourceMapFilename: '[file].map',
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]', // string
        devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]', // string
        umdNamedDefine: true
    },
    performance: {
        hints: false
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                include: /\.min\.js$/,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    compress: true,
                    ie8: false,
                    ecma: 5,
                    output: {comments: false},
                    warnings: false
                },
                warningsFilter: () => false
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin([ 'build' ])
    ],
    devtool: "source-map"
};