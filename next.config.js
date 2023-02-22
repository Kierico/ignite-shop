/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* para a imageUrl não der erro */
  images: {
    domains: [
      'files.stripe.com',
    ]
  }

}

module.exports = nextConfig
