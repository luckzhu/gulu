# 轱辘-一个Vue UI组件
[![Build Status](https://travis-ci.com/luckzhu/gulu.svg?branch=master)](https://travis-ci.com/luckzhu/gulu)

##介绍
这是我在学习Vue过程中做的一个UI框架

##开始使用
1、添加CSS样式
    使用本框架前，请在css中开启 border-box
    
    ```
    *,*::before,*::after{box-sizing: border-box}
    ```
    
    IE8 及以上浏览器都支持此样式
    
   你还需要设置默认颜色等变量（后续会改为sass变量）
    
    ```
     :root{
            --font-size: 14px;
            --color: #333;
            --button-height: 32px;
            --border-radius: 4px;
            --border-color: #999;
            --button-bg: white;
            --border-hover-color: #666;
            --border-active-bg: #eee;
            font-family: PingFangSC-Regular;
          }
    ```
    IE 15及以上浏览器都支持此样式

2、安装gulu

    ```
    npm i --save gulu
    ```
    
3、引入gulu

    ```
    import {Button, ButtonGroup, Icon} from  'gulu-test-zcz'
    import 'gulu-test-zcz/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        HelloWorld,
        'g-button': Button
      }
    }
    ```
4、引入 svg symbols

    ```
    <script src="//at.alicdn.com/t/font_1121624_7nz07jp8koy.js"></script>
    ```
##文档

##提问

##变更记录

##联系方式

##贡献代码