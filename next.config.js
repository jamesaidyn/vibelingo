const withMDX = require('@next/mdx')()

const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/vibelingo' : '',
  assetPrefix: isGithubPages ? '/vibelingo/' : '',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
}

module.exports = withMDX(nextConfig)
