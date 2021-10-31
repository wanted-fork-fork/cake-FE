/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    IS_DEV: process.env.NODE_ENV === "development",
  },
};
