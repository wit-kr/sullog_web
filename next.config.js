const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://52.78.33.186:8080/sullog/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
