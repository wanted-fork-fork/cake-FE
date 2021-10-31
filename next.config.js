/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL:
      process.env.BASE_URL ||
      "https://ec2-13-124-94-121.ap-northeast-2.compute.amazonaws.com:8080",
    IS_DEV: process.env.NODE_ENV === "development",
  },
};
