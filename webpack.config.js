const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/index.html', './src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['file-loader?name=images/[name].[ext]']
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  }
};
