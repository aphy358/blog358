webpack 把所有资源都看作模块，它利用 loaders 和 plugins 对资源进行编译、打包，处理成浏览器能识别的 js、css、html。
常用的 loaders：babel-loader、eslint-loader、file-loader、karma-sourcemap-loader、sass-loader、style-loader、vue-loader
file-loader: 生成文件 file.png，输出到输出目录并返回 public URL。
url-loader: 将小图片打包成 base64
style-loader: Adds CSS to the DOM by injecting a <style> tag
css-loader: 用于解释@import 和 url()，并通过import后进行解析，通常和style-loader结合使用
raw-loader: A loader for webpack that lets you import files as a string.
常用的 plugins：InlineChunkHtmlPlugin、HtmlWebpackPlugin、TerserPlugin、MiniCssExtractPlugin、OptimizeCSSAssetsPlugin、PnpWebpackPlugin、HotModuleReplacementPlugin
HtmlWebpackPlugin: 为html文件中引入的外部资源如script、link动态添加每次compile后的hash;可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
TerserPlugin: 是一个使用 terser 压缩js的webpack 插件。

一、webpack打包文件体积过大？（最终打包为一个js文件）
1.异步加载模块
2.提取第三方库
3.代码压缩
4.去除不必要的插件

如何优化webpack构建的性能
1、减少代码体积 
    a.使用 optimization.splitChunks 提取多个chunk之间的通用模块，减少总体代码体积（webpack 4用两个新的配置选项(optimization.splitChunks and optimization.runtimeChunk)替代了CommonsChunkPlugin。）
    b.把部分依赖转移到CDN上，避免每次编译过程都由Webpack处理
    c.对一些组件库采用按需加载，避免无用的代码
2、减少目录检索范围：在使用loader的时候，通过制定exclude和include选项，减少loader遍历的目录范围，从而加快webpack编译速度
3、减少检索路经：resolve.alias可以配置webpack模块解析的别名，对于比较深的解析路经，可以对其配置alias

webpack 配置 cdn：
https://www.jianshu.com/p/a4801504a225
通过 publicPath 参数设置存放静态资源的CDN目录URL，用对应的线上地址替换原来的相对地址

https://www.jianshu.com/p/13126440d104
externals
防止将某些import的包打包进bundle中，而是在运行时再去外部（cdn，script的方式）获取这些扩展依赖。
操作三部曲：1、html文件中引入cdn资源；2、webpack externals配置；3、文件中引用；

多页面应用，自定义函数获取某个目录下所有页面路径，作为 entry


webpack 插件开发：
webpack插件主要是使用到两个对象，compiler和compilation。
compiler:：包含了webpack环境配置，当webpack调用插件的时候，会返回一个compiler对象，提供给插件。
Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；

compilation：是编译过程的生命周期，这个对象可以访问所有的模块和它们的依赖。
Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。

插件钩子函数：
entryOption / afterPlugins / afterResolvers / beforeRun / run / beforeCompile / compile / afterCompile / emit / afterEmit / done


class TestPlugin{
    apply(compiler){
        compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
            debugger
        });
    }
}
module.exports = TestPlugin


调试插件需要安装 Chrome devtools：
https://blog.csdn.net/neoveee/article/details/73321392
sudo npm install --global node-nightly
sudo node-nightly
然后：
1、在webpack的配置文件中加一个debugger
2、在你的package.json中添加一个新的script,
    比如："debug": "node --inspect --inspect-brk node_modules/.bin/webpack --config build/webpack.dev.conf.js"
3、npm run debug

':123456px;font-size:2px'.replace(/:(\d+)px/g,function(val){
  return ':' + parseFloat(val.substr(1)) * 2 + 'rem'
})


Tapable
const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
} = require("tapable");

