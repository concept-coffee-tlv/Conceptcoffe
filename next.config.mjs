import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'concept-coffee.com' }],
        destination: 'https://www.concept-coffee.com/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    if (process.env.VERCEL_ENV !== 'preview') return []
    return [{
      source: '/:path*',
      headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
    }]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
