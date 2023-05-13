const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    cache: false,
    entry: './server/index.tsx',
    mode: "development",
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    externals: [webpackNodeExternals()]
};
