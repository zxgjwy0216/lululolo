---
title: 安装
---
# 安装
#
```
npm install lululolo -D
npm install node-sass --save-dev
npm install sass-loader --save-dev
在您的main.js中显示的引入您需要的组件
import Button from"lululolo/src/button"
import Icon from"lululolo/src/icon"
....
```
::: danger
由于作者的失误，导致在webpack,vue-cli配置运行环境中出现暂时不可控制的错误，
为了避免暂时性的功能失效，您需要显式的在您的项目中使用sass-loader
并在您的项目中显式的引入您需要的组件如
import Button from"lululolo/src/button"
目前该 UI 仍然是半成品，切勿在生产环境中使用
:::