# vue-cli-init

vue-cli3项目基础搭建

1. 初始化：`vue` + `vue-router` + `vuex`+`babel` + `eslint/prettier`
2. 使用模式`--mode`，用文件管理环境变量，并按照环境分类定义启动命令
3. 定义`assets`目录：`images`、`js`、`less`、`fonts`
4. 使用`less`: `yarn add less less-loader`
5. 使用`less`全局变量: `yarn add style-resources-loader`
6. 样式文件：变量、重置、全局通用
7. 自定义字体
8. 注册全局插件
9. 使用`svg-sprite-loader`，制作`svg雪碧图`，并全局注册`icon-svg`组件，加载`svg`图
9. 在`babel.config.js`中**按需添加**配置`polyfill`，抹平浏览器差异（一些es6、es7方法在ie上不支持）
10. 增加`web.config`文件，解决部署到`azure`时的一下问题：
  - （1）`vue-router`的`history`模式下路径找不到；
  - （2）`woff`和`woff2`字体文件找不到；
11. 线上环境优化
  - 关闭`eslint`: `lintOnSave`
  - 关闭`dev-tools`: `Vue.config.productionTip`
  - 关闭`sourceMap`: `productionSourceMap: false`
  - 打包优化: `uglifyjs-webpack-plugin`
