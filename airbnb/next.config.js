/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  // disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = withPWA(nextConfig);
