/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokDraftToken: process.env.STORYBLOK_DRAFT_TOKEN
  }
}

module.exports = nextConfig
