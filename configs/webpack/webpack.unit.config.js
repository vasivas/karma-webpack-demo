const path = require('path');

const create = (root) => ({
    mode: 'development',
    target: 'web',
    context: path.join(root,'src'),

    resolve: {
        extensions: ['.ts', '.tsx']
    },
    module: {
        rules: [
            {test: '/\.html$/', use: 'html-loader'},
            {test: '/\.css$/', use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},
            {test: '/\.sass$/', use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]},
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: path.join(root,'configs','typescript','tsconfig.unit.json'),
                            sourceMap: false,
                            inlineSourceMap: true
                        }
                    }
                ],
                exclude: [ /node_modules/ ],
                include: [
                    path.join( root, 'src' ),
                ]
            },
        ]
    },
    devtool: 'inline-source-map'
});

module.exports = {create};