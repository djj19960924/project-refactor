const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addWebpackAlias
} = require("customize-cra");

const path = require('path')


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]'
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({ //路径别名
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@router': path.resolve(__dirname, 'src/routes'),
    '@store': path.resolve(__dirname, 'src/store')
  })
);
