const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
    ],
  },
};
