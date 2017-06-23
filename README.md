## webpack工程化   

### webpack 基础    

### 安装webpack     
 
 作为全局安装 

```
$ npm install webpack -g
$ webpack -v    
```
作为项目依赖安装 

```
$ npm install --save webpack      
```
### webpack简介（配置项有如下几点）

<img src="./images/config.jpeg" width="400" height="500" />

```
* entry: 入口，定义要打包的文件。（即app第一个启动文件）  

* output: 出口，定义打包输出的文件，包括路径（path），文件名（filename），还可能有运行时的访问路径（publicPath）参数。   

* module: webpack将所有的资源都看做是模块，而模块就需要加载器；主要定义一些loaders,定义哪些后缀名的文件应该用哪些loader。

* resolve: 定义能够被打包的文件，文件后缀名 

* plugins: 定义一些额外的插件     

``` 

### 入口起点(Entry Points）

#### 单个入口语法

用法： `entry: string | Array<string>`

**webpack.config.js**

```
const config = {
  entry: {
    main: './src/main.js'
  }
};
module.exports = config;
```

简写

```
const config = {
  entry: './src/main.js'
};

module.exports = config;
```

向 entry 属性传入「文件路径(file path)数组」将创建“多个主入口(multi-main entry)”。传入数组这种方式有助于，在你想要多个依赖文件一起注入，并且将它们的依赖导向(graph)到一个“chunk”时。


#### 对象语法

用法： `entry:{[entryChunkName: string]: string|Array<string>}`

**webpack.config.js**

```
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};

module.exports = config;
```
> 对象语法会比较繁琐。然而，这是应用程序中定义入口的最可扩展的方式。            
"可扩展的 webpack 配置"是指，可重用并且可以与其他配置组合使用。这是一种流行的技术，用于将关注点(concern)从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具（如 webpack-merge）将它们合并。













