var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: './app.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};