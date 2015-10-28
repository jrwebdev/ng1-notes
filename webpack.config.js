var webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "src/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
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