/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require("next-plugin-antd-less");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL:
      process.env.BASE_URL ||
      "https://ec2-13-124-94-121.ap-northeast-2.compute.amazonaws.com:8080",
    IMAGE_ENDPOINT:
      process.env.IMAGE_ENDPOINT ||
      "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com",
    IS_DEV: process.env.NODE_ENV === "development",
    KAKAO_API_KEY: process.env.KAKAO_API_KEY || "",
    SITE_DOMAIN: process.env.SITE_DOMAIN || "localhost",
  },
};

module.exports = withAntdLess({
  // modifyVars: { "@primary-color": "#fc1150" },
  lessVarsFilePath: "./src/styles/variables.less",
  ...nextConfig,
  webpack(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzeMode: "server",
          analyzerPort: 8889,
          openAnalyzer: true,
        }),
      );
    }
    return config;
  },
});
