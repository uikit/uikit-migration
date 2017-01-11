var webpack = require('webpack');

var loaders = {
    loaders: [
        {loader: 'buble-loader', test: /(src|tests)(\/|\\).*\.js$/},
    ]
};

module.exports = [
    {
        entry: './src/index',
        output: {
            filename: 'migrationhelper/migrate.js'
        },
        module: loaders
    }
];
