const path = require('path');

const create = (root) => ({
    mode: 'development',

    entry: {
        index: path.resolve(root, 'src', 'index')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(root, 'dest')
    },
    module: {
        rules: [
            {test: '/\.html$/', use: 'html-loader'},
            {test: '/\.css$/', use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},
            {test: '/\.sass$/', use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]},
            {
                test: '/(\.ts|\.tsx)$/',
                use: 'awesome-typescript-loader',
                exclude: ['/node_modules/', '/\.spec.(ts|tsx)$/']
            },
        ]
    }
});

module.exports = {create};