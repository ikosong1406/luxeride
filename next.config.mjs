/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["res.cloudinary.com"], // Add any other domains if needed
  },
};

export default nextConfig;
