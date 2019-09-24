const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const isPlay = process.env.VUE_APP_PLAY_ENV;
const isPro = process.env.NODE_ENV === "production";

module.exports = {
  pages: {
    index: {
      entry: !isPlay ? "examples/main.ts" : "examples/play.ts"
    }
  },
  productionSourceMap: !isPro,
  configureWebpack: config => {
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: "examples/versions.json"
        }
      ])
    );

    config.output.libraryExport = "default";

    if (isPro) {
      config.externals = [
        { 'vue-router': 'VueRouter' }, 
        { 'vue': 'Vue' }, 
        { 'element-ui': 'ELEMENT' }, 
        { 'highlight.js': 'hljs' }, 
        //{ 'jQuery': 'jQuery' }, 
        { 'algoliasearch': 'algoliasearch' },
        { '@progress/kendo-ui': 'kendo' }
      ];

      // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/#chunkfilter
      config.optimization.minimizer[0].options.chunkFilter = (chunk) => {
        // Exclude uglification for the `vendor` chunk
        // if (chunk.name === 'chunk-vendors') {
        //   return true;
        // }

        if (chunk.name === 'index') {
          return false;
        }

        // console.log("test:chunk: " + chunk.name)
        return true;
      };
    }
  },
  chainWebpack: config => {
    // 设置全局变量别名
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"))
      .set("packages", path.resolve("packages"))
      .set("main", path.resolve("src"))
      .set("albatro-ui", path.resolve("./"));

    // 把 packages 和 examples 加入编译
    config.module
      .rule("ts")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end();

    config.module
      .rule("scss")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end();


      config.module
      .rule("scss")
      .include.add(/node_modules/)
      .end();

    config.module
      .rule("js")
      .include.add(/src/)
      .end();

    config.module
      .rule("md")
      .test(/\.md$/)
      //.exclude.add(/examples\/docs\/en-US/).end()
      .use("vue")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use("md")
      .loader(path.resolve("build/md-loader/index.js"))
      .end();
  }
};
