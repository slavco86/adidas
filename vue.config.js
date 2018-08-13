const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./src/config');

module.exports = {
  baseUrl: config.baseUrl,
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
    ],
  },
};
