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



登陆模块的安全？
https://www.jianshu.com/p/b078282653b3
对称加密、非对称加密
对称加密通常有 DES,IDEA,3DES 加密算法。缺点：如果用户一旦多的话，管理密钥也是一种困难。不方便直接沟通的两个用户之间怎么确定密钥也需要考虑，这其中就会有密钥泄露的风险，以及存在更换密钥的需求。
非对称加密算法有：RSA、ECC（移动设备用）、Diffie-Hellman、El Gamal、DSA（数字签名用）
采用非对称加密+摘要算法+数字签名的机制来确保传输安全。

vue 双向数据绑定
https://www.cnblogs.com/zhenfei-jiang/p/7542900.html
https://www.cnblogs.com/wangjiachen666/p/9883916.html
依赖收集：编译模版的时候，在每一处用到该数据的地方都会生成一个对应的 watcher，watcher 在初始化的时候会强制触发一次该数据的 getter，然后在 get 方法中将这个 watcher 添加到 Dep 中。

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
Node.js，Stream 有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。
node 单线程，如何搞成多线程
node.js简单实现多进程
实际上来说，普通程序无法创建进程，只有系统可以。所以一般可以用主进程分裂（克隆）出一个子进程。node.js中可以用cluster模块实现多进程，cluster中fork()可以从主进程分裂出子进程。
注意：
    只有主进程有fork()，所以在分裂出子进程时需要判断当前是否主进程。
    出于安全性考虑，一般主进程只负责派生子进程，以保证程序不那么容易崩。
    主进程与子进程能够共享句柄（所以同一体系内的主子进程能共享一个端口）


//AMD规范的异步载入
const ComA = resolve => require(['./components/A.vue' ], resolve);
const ComB = resolve => require(['./components/B.vue' ], resolve);
const ComC = resolve => require(['./components/C.vue' ], resolve);

//CMD风格的异步加载
const ComA = resolve => require.ensure([], () => resolve(require('./components/A.vue')));
const ComB = resolve => require.ensure([], () => resolve(require('./components/B.vue')));
const ComC = resolve => require.ensure([], () => resolve(require('./components/C.vue')));

CommonJS模块的重要特性是加载时执行,ES6中import是编译时执行，编译为require/exports
AMD/CMD/CommonJs是JS模块化开发的标准，目前对应的实现是RequireJs/SeaJs/nodeJs.
CommonJs主要针对服务端，AMD/CMD主要针对浏览器端，所以最容易混淆的是AMD/CMD
AMD/CMD区别：依赖前置／依赖就近，加载完就执行／用到的时候才执行



微任务、宏任务？
https://blog.csdn.net/lc237423551/article/details/79902106ß
nextTick 原理
https://github.com/answershuto/learnVue/blob/master/docs/Vue.js%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0DOM%E7%AD%96%E7%95%A5%E5%8F%8AnextTick.MarkDown
https://www.cnblogs.com/liuhao-web/p/8919623.html
nextTick的实现比较简单，执行的目的是在microtask或者task中推入一个function，在当前栈执行完毕以后执行nextTick传入的function
nextTick是一个立即执行函数,返回一个queueNextTick接口。
传入的cb会被push进callbacks中存放起来，然后执行timerFunc（pending是一个状态标记，保证timerFunc在下一个tick之前只执行一次）。
timerFunc是什么？其实就是按照Promise，MutationObserver，setTimeout优先级，哪个存在使用哪个，最不济的环境下使用setTimeout。



前端多种图片格式的比较
https://blog.csdn.net/u012995964/article/details/51755545


webpack 加载顺序 （compose 的方式）
https://www.jianshu.com/p/5d91f44358db
有两种函数组合的方式，一种是pipe，另一种是compose。前者从左向右组合函数，后者方向相反。
webpack打包优化：cdn资源引入+ webpack externals配置

webpack 钩子函数，Tapable 运行机制，如何开发自己的插件
webpack 工作流程：
https://www.jianshu.com/p/37ff752d0f97
修改过哪些 webpack 配置？多入口的 entry 路径，自己编写了一个函数动态获取指定目录下的所有文件夹名，以这些文件夹名作为入口，优化loader配置 缩小文件搜索范围，用 include、exclude，再就是设置路径别名，加快路径查找，optimization.splitChunks 提取公共代码常用库（react、redux、lodash），用 Happypack 来加速代码构建（多进程）。

webpack 如何实现代码拆分 optimization.splitChunks

before-run 清除缓存
run 注册缓存数据钩子
before-compile
compile 开始编译
make 从入口分析依赖以及间接依赖模块，创建模块对象
after-compile 完成构建，缓存数据
emit 输出到dist目录
after-emit  
done 完成编译
failed 编译失败

require/import
https://www.cnblogs.com/sunshq/p/7922182.html


笃定，自信，不示弱
骨架屏
js/css 的 cdn 应用（cdn 回源）
https://www.jianshu.com/p/e7751ecb6f21

redux，tapable，vuex，vue 源码
微信小程序项目熟悉（授权登陆，用户信息授权等）
授权登陆：先尝试获取登陆态，如未登陆，则调用 wx.login 接口获取 code，后台用这个 code 去微信后台获取用户信息。
用户信息授权：新建一个页面引导用户点击‘授权登陆’，获取用户的信息，如头像、国籍等。
<button  
        class='auth-btn' 
        open-type="getUserInfo" 
        lang="zh_CN" 
        bindgetuserinfo="onGotUserInfo">授权登录</button>
微信公众号项目熟悉
登录流程：先带着 appid 请求微信后台，返回一个 code，前端将 code 传到后台，后台用这个 code 换取网页授权 access_token，通过网页授权 access_token 和 openid 获取用户基本信息
svg
react 的 diff 算法

如何做好一个前端项目经理


单元测试：
mocha --compilers js:babel-core/register ./server/**/*.test.js


import和require的区别
https://www.cnblogs.com/sunshq/p/7922182.html
require 是 AMD规范引入方式
import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法
require是运行时调用，所以require理论上可以运用在代码的任何地方
import是编译时调用，所以必须放在文件开头
require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require

require / exports ：
遵循 CommonJS/AMD，只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。
遵循 ES6 规范，支持编译时静态分析，便于JS引入宏和类型检验。动态绑定。
写法就比较多种多样：


普通函数和箭头函数区别：
普通函数的 this 指向调用它的对象，如果没有明确的调用者，就指向 window，箭头函数的 this 指向函数定义生效时所在的对象。
箭头函数不能作为构造函数、没有 arguments、不能用作 generator 函数。
并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this.

闭包其实就是对应着 js 里面的函数。

computed / watch:
https://blog.csdn.net/tangxiujiang/article/details/81170490
https://blog.csdn.net/sinat_17775997/article/details/82682972

小程序：
https://blog.csdn.net/lianghaihsia/article/details/84140817
小程序的渲染层和逻辑层分别由 2 个线程管理：渲染层的界面使用了 WebView 进行渲染，逻辑层采用 JsCore 线程运行 JS 脚本。
微信小程序的框架包含两部分 view视图层、APP service逻辑层。视图层和逻辑层通过系统层的JSBridage进行通信。
逻辑层： 创建一个单独的线程去执行JavaScript,在这个环境下执行的都是有关小程序业务逻辑的代码
渲染层： 界面渲染相关的任务全都在webView线程中执行，通过逻辑层的代码去控制渲染哪些界面。
一个小程序存在多个界面，所以渲染层存在多个webview线程。

面试题
https://www.cnblogs.com/canning-gao/p/5708796.html

Function.prototype.mycall = function (ctx,...args){
    cxt = ctx||window;
    var fn = Symbol();
    cxt[fn] = this;
    var result = cxt[fn](...args);
    return result;
}

class Promise {
		constructor (executor) {   // executor里面有两个参数，一个叫resolve（成功），一个叫reject（失败）。
			this.status = 'pending',
			this.value = undefined;
			this.reason = undefined;
			this.onResolvedCallbacks = [];
			this.onRejectedCallbacks = [];
			let resolve = (value) => {		// 这里一定要用箭头函数
				if (this.status == 'pending') {
					this.status = 'resolve';
					this.value = value;
					this.onResolvedCallbacks.forEach(fn => fn())
				}
			}

			let reject = (reason) => {
				if (this.status == 'pending') {
					this.status = 'reject';
					this.reason = reason;
					this.onRejectedCallbacks.forEach(fn => fn())
				}
			}
			try{
				executor(resolve, reject);
			} catch (err) {
				reject(err);
			}
		} 
		then (onFullFilled,onRejected) {
			if (this.status == 'resolved') {
				onFullFilled(this.value)
			}
			if (this.status == 'rejectd') {
				onRejected(this.reason);
			}
			if (this.status == 'pending') {
				this.onResolvedCallbacks.push(()=>{
					onFullFilled(this.value);
				})
				this.onRejectedCallbacks.push(()=> {
					onRejected(this.reason);
				})
			}
		
		}
	}

●SVG 可被非常多的工具读取和修改（比如记事本）
●SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
●SVG 是可伸缩的
●SVG 图像可在任何的分辨率下被高质量地打印
●SVG 可在图像质量不下降的情况下被放大
●SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
●SVG 可以与 JavaScript 技术一起运行
●SVG 是开放的标准
●SVG 文件是纯粹的 XML
