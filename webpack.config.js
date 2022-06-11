const path = require('path');

const deployment = 'development';

const game = {
    entry: {
        'src/main/resources/static/js/game': './src/main/js/game/index.ts',
        'target/classes/static/js/game': './src/main/js/game/index.ts'
    },
    devtool: 'inline-source-map',
    mode: deployment,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
        fallback: { "fs": false },
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './'),
    },
}

const webpages = {
	entry: {
        /*'src/main/resources/static/js/login': './src/main/js/login.jsx',
        'target/classes/static/js/login': './src/main/js/login.jsx',

        'src/main/resources/static/js/register': './src/main/js/register.jsx',
        'target/classes/static/js/register': './src/main/js/register.jsx',

        'src/main/resources/static/js/rooms': './src/main/js/rooms.jsx',
        'target/classes/static/js/rooms': './src/main/js/rooms.jsx',*/
    },
    devtool: 'source-map',
    // TODO: Change this to take in env variable
    mode: deployment,
    cache: true,
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    name: "configIndexSrc",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './'),
    },
};

module.exports = [
    game,
    /*webpages*/
];