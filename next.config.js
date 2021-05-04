module.exports = {
  distDir: 'out',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/projects',
        permanent: true,
      },
    ]
  },
}