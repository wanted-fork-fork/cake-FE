import path from "path";

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-ant-design',
      options: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#fc1150',
          },
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    // node_modules, styles 폴더 내부 모듈 인식시키기
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];

    // storybook 내에서 절대경로 사용할 수 있도록 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "../src"),
      "@dummy": path.resolve(__dirname, "../dummy"),
    };

    return config;
  }
}