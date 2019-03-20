#lululolo 一个VUE UI 组件

作者：lulu

##介绍
这是我之前学习VUE过程做的一些组件，通过MVVC模块化思维整合起来，通过chai手动测试，希望对你有帮助--持续更新

## 开始使用

1.添加CSS样式
框架默认开启border-box
```
    *{box-sizing:border-box;},*::after{box-sizing:border-box};
```
IE8以及以上浏览器都支持此样式

你还需要设置默认颜色等变量(后续会引入scss变量)
```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
```
IE 15 以上才支持此样式

2.安装lululolo
```
    npm install --save lululolo
```
3.引入lululolo
```
    import  {Button,Icon} from 'lululolo'
    import 'lululolo/dist/index.css'
    
    export default {
      components: {
        'g-button':Button,
        'g-icon':Icon
      }
    }
```