import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/builds/buildWebpackConfig';
import { BuildPaths } from './config/builds/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';
const PORT = 3000;

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev,
    port: PORT,
});

export default config;
