1、 
'12' < '8' 字符串与字符串比较是逐个按 ASCII 码来的
'12' > 8 字符串与数字比较，字符串会先转成数字

2、关于缓存的请求头，响应头有：
通用信息头：
Request  URL      请求的地址
Request  Method    请求的方法类型
Status  Code      响应状态码
Remote  Address    表示远程服务器地址       

请求头：
Accept        告诉服务器可以接受的文件格式。根据Accept头的不同，按照相应的顺序进行produces的匹配。
Accept-Encoding  gzip,deflate,sdch,br 指定浏览器可以支持的web服务器返回的内容压缩编码类型
Accept-Language  浏览器支持的语言
Cache-Control   指定请求和响应遵循的缓存机制
Connection     keep-alive 表示是否需要持久连接
Cookie        HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器
Host         指定请求的服务器的域名和端口号
Referer       告诉服务器是从哪个网站链接过来的
User-Agent     用户代理：简称UA。内容包含发出请求的用户信息，使得服务器能够识别客户端使用的操作系统及版本、CPU类型、浏览器及版本、浏览器渲染引擎、浏览器语言、插件等。
Authorization   当客户端访问受口令保护时，服务器端会发送401状态码和www-authenticate 响应头，要求客户机使用Authorization来应答

响应头：
Content-Length   响应体的长度
Content-type     返回的响应MIME类型与编码:告诉浏览器它发送的数据属于什么文件类型   
Cache-control    指定请求和响应遵循的缓存机制
Date         原始服务器消息发出的时间
Server        web服务器软件名称
Last-Modified   标记请求的资源在服务器端最后被修改的时间
status: 200
content-encoding: gzip
vary: Accept-Encoding

3、
function Foo(){
    getName = function(){ alert(1) }
    return this
}

Foo.getName = function(){ alert(2) }
Foo.prototype.getName = function(){ alert(3) }
var getName = function(){ alert(4) }
function getName(){ alert(5) }

Foo.getName()
getName()
Foo().getName()
getName()
new Foo.getName()
new Foo().getName()
new newFoo().getName()


var dom1 = document.getElementById('testBubble')
dom1.addEventListener('click', fn1, false)
dom1.addEventListener('click', fn2, true)
dom1.addEventListener('click', fn3, true)
dom1.addEventListener('click', fn4, false)
如果是直接点击在目标元素上，而事件又是直接绑定在目标元素上，则函数的执行顺序是 fn1 -> fn2 -> fn3 -> fn4
如果事件是绑定在父元素上，而在它的子元素上点击了一下，则函数的执行顺序是 fn2 -> fn3 -> fn1 -> fn4  ，先捕获，后冒泡，true 是捕获，false 是冒泡


环球易购：
工具？抓包？性能测试工具？
抓包工具有哪些
比较熟悉的是Mac上用Charles,Windows上用Fiddler
YSlow  PageSpeed --Web前端性能测试工具
基础：html、js、css


登陆模块的安全？
https://www.jianshu.com/p/b078282653b3
对称加密、非对称加密

vue 双向数据绑定
https://www.cnblogs.com/zhenfei-jiang/p/7542900.html
https://www.cnblogs.com/wangjiachen666/p/9883916.html

node 单线程，如何搞成多线程

webpack 钩子函数，Tapable 运行机制，如何开发自己的插件

webpack 如何实现代码拆分

微任务、宏任务？
https://blog.csdn.net/lc237423551/article/details/79902106ß
nextTick 原理
https://github.com/answershuto/learnVue/blob/master/docs/Vue.js%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0DOM%E7%AD%96%E7%95%A5%E5%8F%8AnextTick.MarkDown
https://www.cnblogs.com/liuhao-web/p/8919623.html
nextTick的实现比较简单，执行的目的是在microtask或者task中推入一个function，在当前栈执行完毕以后执行nextTick传入的function
nextTick是一个立即执行函数,返回一个queueNextTick接口。
传入的cb会被push进callbacks中存放起来，然后执行timerFunc（pending是一个状态标记，保证timerFunc在下一个tick之前只执行一次）。
timerFunc是什么？其实就是按照Promise，MutationObserver，setTimeout优先级，哪个存在使用哪个，最不济的环境下使用setTimeout。

settimeout 和 Promise 有什么区别？

computed的实现
webpack问过amd跟cmd的区别
node问过stream。流跟管道那一套

前端多种图片格式的比较
https://blog.csdn.net/u012995964/article/details/51755545


webpack 加载顺序 （compose 的方式）
https://www.jianshu.com/p/5d91f44358db
有两种函数组合的方式，一种是pipe，另一种是compose。前者从左向右组合函数，后者方向相反。

require/import
https://www.cnblogs.com/sunshq/p/7922182.html


笃定，自信，不示弱
骨架屏
js/css 的 cdn 应用（cdn 回源）
redux，tapable，vuex，vue 源码
微信小程序项目熟悉（授权登陆，用户信息授权等）
微信公众号项目熟悉
svg
react 的 diff 算法

如何做好一个前端项目经理





面试题
https://www.cnblogs.com/canning-gao/p/5708796.html

