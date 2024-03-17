const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
//const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '..', './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',

  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    alias: {
      '': path.resolve(__dirname, '..', 'src'),
      'config': path.resolve(__dirname, '..', 'src/config/'),
      'components': path.resolve(__dirname, '..', 'src/components/'),
      'models': path.resolve(__dirname, '..', 'src/models/'),
      'pages': path.resolve(__dirname, '..', 'src/pages/'),
      'store': path.resolve(__dirname, '..', 'src/store/'),
      'routes': path.resolve(__dirname, '..', 'src/routes/'),
      'hooks': path.resolve(__dirname, '..', 'src/hooks/'),
      'utils': path.resolve(__dirname, '..', 'src/utils/'),
      '': path.resolve(__dirname, '..', 'public'),
      'config': path.resolve(__dirname, '..', 'public/css/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CarFleet',
      filename: 'index.html',
      template: path.resolve(__dirname, '..', './public/template.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '..', 'public/images/logo.png'),
      prefix: '',
      outputPath: path.resolve(__dirname, '..', 'dist/public/resource'),
      inject: (htmlPlugin) =>
        path.basename(htmlPlugin.options.filename) === 'index.html',
    }),
  ],
  stats: 'errors-only',
}