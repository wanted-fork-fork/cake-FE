/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL || "http://13.124.94.121:8080",
    IS_DEV: process.env.NODE_ENV === "development",
  },
};
