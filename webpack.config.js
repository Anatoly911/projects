const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    context: path.resolve(__dirname, 'static_src'),
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'bundle.js',
        publicPath: '/static/build/',
    },
    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'static_src'),
                options: {
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                    ]
                }
            },
            {
                test: /.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    // plugins: [

    // ],
    devServer: {
        port: 3000,
        hot: true,
        open: false
    }
}