# webpack-demo
自动换肤脚本
## 需求背景
1.为了达成mobile项目中的不同应用展示不同皮肤的效果。

## 实现思路
 1.编写原子样式通过动态的改变class前缀`theme-color`来达到动态修改样式

 2.编写自动化生成样式脚本（通过读写默认css文件正则匹配颜色值以及图片）

 3.在webpack入口文件中通过require引入主题css文件

 4.通过`window.theme`值来动态的修改class前缀从而达到展示对应样式`window.theme = themeObj[themeApp].themeName`

##  example
### 1. 首先配置换肤对象changestyle.conf.js
1.以下只需更改theme-color为对应的值（**如财富管理theme-color为theme-blue**）

2.imgHashArray对象key:value 将对应图片[熊猫书院后台管理系统](http://zhipo.pandateacher.com/login)的哈希值，配置在对象的key上即可
```javascript
    var objTheme={
    themeArray:[
        {
            readUrl:'../static/theme/theme-orange.css',
            writeUrl:'../static/theme/theme-blue.css',
            imgHashArray:{
                study_clockimg:'64ea2e56-b415-489a-9084-53c115916581',
                bgimg_completed:'b6a00e88-0d42-42e6-861e-9c1928efeb04',
                challengeFalsebgImg:'7546953f-4033-42d6-b199-88edc55c543d',
                challengeTruebgImg:'57765a19-4e00-4a2e-8170-2bb80f82e87d',
                challenge_active_bg:'0f6f006f-84ba-4448-8452-fae6ae68c1cc',
                challenge_disabled_bg:'5e4ff8c9-7460-470e-a370-14793ed2a159',
                navicon_active_study:'64f5fd3e-951a-46ee-9ea7-fabf1f1ecc6e',
                navicon_active_course:'43a0b4a1-14e3-4aeb-b340-29a176bef7df',
                navicon_active_training:'6c117778-abbf-4751-bc02-28bcf37038f4',
                navicon_active_user:'30a22662-5f21-4b34-b73b-1790ef4ed3a8'
            },
            themeName:'theme-blue',
            color:'#2978e6'
        }
    ]
}
```  
### 2.新增man.js中配置 配置这两步骤后即可
1.appName为应用名
```javascript
    var themeObj = {
        'fortune_school':{
            themeName:'theme-blue',
            themeUrl:'/theme-blue.css',
        },
        'healthy_lesson':{
            themeName:'theme-orange',
            themeUrl:'/theme-orange.css',
        },
        appName:{
            themeName:'theme-color',
            themeUrl:'/theme-color.css',
        }
    } 
``` 
## 总结
1.修改了配置方法，不在通过index去匹配，现在通过key:value匹配，更加的易懂

2.想法：不将图片传cdn，直接放在项目文件中，通过绝对路劲或相对路径引入因为主题css文件与图片均通过了webpack打包所以可以引用到，不过需要修改changestyle.conf.js以及changestyle.js(省略了传图的步骤)
