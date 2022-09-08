/** @type {import('next').NextConfig} */

const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
})

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = semi({
  ...nextConfig,
})

// module.exports = nextConfig
