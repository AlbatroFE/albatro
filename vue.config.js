const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const isPlay = process.env.VUE_APP_PLAY_ENV;

module.exports = {
  pages: {
    index: {
      entry: !isPlay ? "examples/main.ts" : "examples/play.ts"
    }
  },
  configureWebpack: config => {
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: "examples/versions.json"
        }
      ])
    );

    config.output.libraryExport = "default";

    // if (process.env.NODE_ENV === 'production') {
    //   config.externals = [{'vue-router': 'VueRouter'},{ 'vue': 'Vue' },{ 'element-ui': 'ELEMENT'},{'highlight.js': 'hljs'},{'jQuery':'jQuery'},{'algoliasearch':'algoliasearch'}]
    // }

    config.externals = [{'vue-router': 'VueRouter'},{ 'vue': 'Vue' },{ 'element-ui': 'ELEMENT'},{'highlight.js': 'hljs'},{'jQuery':'jQuery'},{'algoliasearch':'algoliasearch'}]
  },
  chainWebpack: config => {
    // @ 默认指向 examples 目录
    // @ 默认指向 packages 目录
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
      //.test(/\.css$/)
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end();

    config.module
      .rule("css")
      //.test(/\.css$/)
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end();

    config.module
      .rule("js")
      .include.add(/src/)
      .end();

    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue")
      .loader("vue-loader")
      .options({
        compilerOptions : { 
          preserveWhitespace: false
        }
      })
      .end()
      .use("md")
      .loader(path.resolve("build/md-loader/index.js"))
      .end();
  }
};
