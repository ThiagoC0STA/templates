/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/creative-agency",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
