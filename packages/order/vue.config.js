const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: name,
      libraryTarget: "umd",
    },
  },
});
