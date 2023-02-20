import path from 'path';
import {Configuration, DefinePlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const webpackConfig = (): Configuration => ({
    entry: './src/index.tsx',
    ...(process.env.production || !process.env.development
        ? {}
        : {devtool: 'eval-source-map'}),

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            views: path.resolve(__dirname, 'src/views'),
            pages: path.resolve(__dirname, 'src/pages'),
            layouts: path.resolve(__dirname, 'src/layouts'),
            utils: path.resolve(__dirname, 'src/utils'),
            assets: path.resolve(__dirname, 'src/assets'),
            store: path.resolve(__dirname, 'src/store'),
            types: path.resolve(__dirname, 'src/types'),
        },
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /build/,
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
            template: './public/index.html',
        }),
        // DefinePlugin allows you to create global constants which can be configured at compile time
        new DefinePlugin({
            'process.env': process.env.production || !process.env.development,
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
});

export default webpackConfig;
