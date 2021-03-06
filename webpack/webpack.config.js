const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCSSExtractPlugin.loader,
                // 'style-loader', //Adiciona CSS a DOM
                'css-loader', //Interpresta @impport, url
                'sass-loader'
            ]
        }]
    }
}