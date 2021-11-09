/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require("next-plugin-antd-less");

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL:
      process.env.BASE_URL ||
      "https://ec2-13-124-94-121.ap-northeast-2.compute.amazonaws.com:8080",
    IS_DEV: process.env.NODE_ENV === "development",
  },
};

module.exports = withAntdLess({
  // modifyVars: { "@primary-color": "#fc1150" },
  lessVarsFilePath: "./src/styles/variables.less",
  ...nextConfig,
  webpack(config) {
    return config;
  },
});
