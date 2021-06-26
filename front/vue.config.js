module.exports = {
  devServer: {
    public: 'localhost',
    port: 3000,
    publicPath: 'http://localhost:3000',
    proxy: {
      '/api/': {
        target: 'http://localhost:8000'
      }
    }
  },
  outputDir: '../backend/public',
  assetsDir: 'assets',
  indexPath: process.env.NODE_ENV === 'production'
    ? '../backend/resources/views/index.blade.php'
    : 'index.html'
}