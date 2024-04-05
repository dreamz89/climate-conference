/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokAccessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    nodeEnv: process.env.NEXT_PUBLIC_NODE_ENV,
  }
}

module.exports = nextConfig
