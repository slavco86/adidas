const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '//jdsports-client-resources.co.uk/jdsports-client-resources/page/adidas-hub/'
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
