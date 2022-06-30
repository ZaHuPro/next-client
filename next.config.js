const withFonts = require('next-fonts');

module.exports = withFonts({
  trailingSlash: true,
  handleImages: ['jpeg', 'png', 'svg'],
  enableSvg: true,
  // images: {
  //   loader: 'imgix',
  //   path: 'https://www.website.com/images',
  // },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:4040/api',
    APP_URL: process.env.APP_URL || 'https://www.website.com',
    APP_NAME: process.env.APP_NAME || 'Website',
  },
  webpack(config) {
    return config;
  },
});
