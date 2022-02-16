const path = require('path');

const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const isAnalysis = process.env.NODE_ENV === 'analyse';
const isProduction = isAnalysis || process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const isDevServer = process.env.WEBPACK_DEV_SERVER;

const config = {
  target: 'web',
  entry: {
    app: path.resolve('./src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: (isDevelopment ? '[name].js' : '[name].[contenthash].js'),
    chunkFilename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new WebpackManifestPlugin({}),
    new ForkTsCheckerWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.([jt]s|[jt]sx)$/i,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.([jt]sx?)$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.mjs',
      '.tsx',
      '.ts',
    ],
    alias: {
      '@src': path.resolve('src'),
    },
  },
};

module.exports = () => {
  config.plugins.push(new webpack.DefinePlugin({
  }));

  if (isAnalysis) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  if (isProduction) {
    config.mode = 'production';
    config.devtool = 'source-map';
  }

  if (isDevelopment || isDevServer) {
    config.plugins.push(new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
      overrideConfigFile: './eslint.config.js',
    }));

    config.mode = 'development';
    config.devtool = 'inline-source-map';
    config.devServer = {
      host: 'localhost',
      port: 3000,
      allowedHosts: ['http://localhost'],
      hot: true,
      proxy: {
        '/': {
          target: 'http://localhost',
          changeOrigin: true,
          secure: false,
        },
      },
    };
  }

  return config;
};
