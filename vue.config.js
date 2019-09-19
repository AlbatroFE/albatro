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
  },
  chainWebpack: config => {
    // @ 默认指向 examples 目录
    // @ 默认指向 packages 目录
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"))
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
      .rule("js")
      .include.add(/src/)
      .end();

    config.module
      .rule("md")
      .test(/\.md$/)
      //.include.add(/examples/).end()
      .use("vue")
      .loader("vue-loader")
      .options({
        preserveWhitespace: true
      })
      .end();

    config.module
      .rule("md")
      .use("custom")
      .loader(path.resolve("build", "./md-loader/index.js"))
      .end();

    // config.plugin('CopyWebpackPlugin')
    //   .use(CopyWebpackPlugin, [{ from : /examples\/versions.json$/ }])

    // config.plugins.push(new CopyWebpackPlugin([{
    //     from: 'examples/versions.json'
    // }]));
  }
};
