/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    };
    return config;
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /.(woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/fonts/',
          publicPath: '/_next/static/fonts/',
          limit: 1
        }
      }
    });

    return config;
  },
  eslint: {
    dirs: ['src']
  }
};
