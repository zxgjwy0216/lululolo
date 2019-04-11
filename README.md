#lululolo 一个VUE UI 组件

作者：lulu
author:lulu

## 介绍
这是我之前学习VUE过程做的一些组件，通过MVVC模块化思维整合起来，通过chai手动测试，希望对你有帮助(持续更新中)


## 开始使用

1.添加CSS样式
框架默认开启border-box
```
    *{box-sizing:border-box;},*::after{box-sizing:border-box};
```
IE8以及以上浏览器都支持此样式

2.安装lululolo
```
    npm install --save lululolo
```
3.引入lululolo
```
    import  {Button,Icon} from 'lululolo'
    export default {
      components: {
                import  Button from './button';
                import  Icon from './icon';
                import  Input from './input';
                import  ButtonGroup from './button-group';
                import  Col from './col';
                import  Row from  './row';
                import  Plugin from './plugin';
                import  Tabs from './tab';
                import  TabsHead from  './tabs-head';
                import TabsBody from './tabs-body';
                import  TabsPane from './tabs-pane';
                import  TabsItem from './tabs-item';
                import  Toast from "./toast";
                import  Popover from './popover';
                import  Collapse from './collapse'
                import  CollapseItem from './collapse-item'
                import  Footer from  './layout/footer';
                import  Header from  './layout/header';
                import  Content from  './layout/content';
                import  Layout from  './layout/layout'
                import  Slider from  './layout/sider';
      }
    }
```
