/** @type {import('next').NextConfig} */
// Sito completamente statico: nessun server Node in produzione,
// deploy previsto su Vercel o Netlify come export statico.
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
