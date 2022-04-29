const path = require('path')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cms.sayyesquickly.net'],
    formats: ['image/avif', 'image/webp'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// const withPlugins = require('next-compose-plugins')
// const withImages = require('next-images')

// const nextConfig = {
//   images: {
//     domains: ['cms.sayyesquickly.net']
//   }
// }

// module.exports = withPlugins([[withImages]], nextConfig)
