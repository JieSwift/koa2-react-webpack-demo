## Koa2-React-Webpack-Demo ##

> 关于Koa2、React、Webpack搭建一个完整的项目例子。
> 前端用react UI组件化开发，负责MVC中的View和Controller
> 后端用Koa2 只负责MVC中的Model
> 完全实现前后端分离。

### 安装项目依赖 ###
    npm install 

### 项目文件说明 ###
    +root
      +app 前端组件
        +components 组件
        +template 模板
        --admin.jsx 后台入口文件
        --index.jsx 首页入口文件 
      +logs 日志文件
      +src 项目源文件(服务端、编译好的前端文件)
        +config koa的配置文件
        +error koa的错误处理文件
        +lib koa的库文件
        +middleware koa的中间件
        +model koa的model文件
        +routes koa的route文件
        +public koa的public文件,一些静态资源
        +utils utils文件
        +upload 上传的文件
        --app.js koa加载的一些路由，资源。
      --.babelrc babel配置文件
      --.eslintrc eslint配置文件
      --.gitignore git忽略的文件
      --.jshintrc jshintrc配置文件
      --nodemon.json nodemon配置文件
      --start.js nodejs服务开启入口文件
      --webpack.config.js 开发环境Webpack配置文件
      --webpack.production.config.js 生产环境Webpack配置文件

### package.json配置 ###

    "scripts": {
        "eslint": "eslint --ext .jsx src",
        "eslint-fix": "eslint --fix --ext .jsx src",
        "test": "SET NODE_ENV=test mocha --compilers js:babel-core/register",
        "start": "webpack-dev-server --hot --inline --devtool eval --progress --colors --profile",
        "dev-server": "nodemon start.js -w",
        "server": "pm2 start start.js --watch",
        "restart": "pm2 restart",
        "stop": "pm2 stop start.js",
        "deploy": "NODE_ENV=production webpack -p --config webpack.production.config.js",
        "deploy-windows": "SET NODE_ENV=production & webpack -p --config webpack.production.config.js",
        "webpack-stats": "webpack --json > stats.json"
     },
#### 一些说明 ####

> npm start 开启webpack-dev-server 
> npm run dev-server 开发环境运行nodejs服务
> npm run test 测试代码 mocha chai supertest测试
> npm run eslint 进行eslint检查规范
> npm run deploy 生产环境编译前端组件
> npm run webpack-stats 生成项目依赖关系的json文件

### 参考文章 ###
[阮一峰老师的 npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html "npm scripts 使用指南")

[阮一峰老师的 JavaScript 全栈工程师培训教程](http://www.ruanyifeng.com/blog/2016/11/javascript.html "JavaScript 全栈工程师培训教程")

[React官网](https://facebook.github.io/react/docs/hello-world.html "React官网")

[入门Webpack,看这篇就够了](https://segmentfault.com/a/1190000006178770 "入门Webpack,看这篇就够了")

> 关于Webpack的配置可以参考下React Webpack构建SPA脚手架

[React Webpack构建SPA脚手架](https://github.com/JieSwift/SPA-Generator "React Webpack构建SPA脚手架")
