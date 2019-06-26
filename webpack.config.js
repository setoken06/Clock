const CopyPlugin = require("copy-webpack-plugin");
const MODE = process.env.NODE_ENV || "development";
const WorkboxPlugin = require("workbox-webpack-plugin");

const copyRules = [
  {
    from: __dirname + "/src/index.html",
    to: __dirname + "/dist/index.html"
  },
  {
    from: __dirname + "/assets",
    to: __dirname + "/dist"
  }
];

module.exports = {
  mode: MODE,
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new CopyPlugin(copyRules),
    new WorkboxPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};
