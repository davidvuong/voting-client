module.exports = {
    // Multiple entry points:
    //
    // After running webpack, it looks like it pulls from all entry points and
    // then places all of it into `/dist/bundle.js`.
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],

    // Configure Webpack to find .jsx and js files then process via Babel.
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,

            // Configures react-hot loader to be used with babel.
            loader: 'react-hot!babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};
