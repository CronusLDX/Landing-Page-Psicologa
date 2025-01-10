const path = require('path');

module.exports = {
  entry: './src/index.js', // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public'), // Pasta de saída
    filename: 'index.js', // Nome do arquivo de saída
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/, // Verifica arquivos .js
        exclude: /node_modules/, // Exclui a pasta node_modules
        use: {
          loader: 'babel-loader', // Usando Babel para transpilar o código
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // Suporte para arquivos .js
  },
};
