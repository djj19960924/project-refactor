const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy
} = require("customize-cra");


module.exports = override(
  fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: 'less' // change importing css to less
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]'
  }),
  override(addDecoratorsLegacy())
);
