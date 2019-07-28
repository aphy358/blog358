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

vue / react 列表为什么建议用 key
不用 key 的话，会尽可能的复用元素，而只是改变文本
用 key 的话，会删除老节点，新增新节点，这种方式：1、有利于完整地触发组件的生命周期钩子。2、触发过渡。



Set
成员唯一、无序且不重复
[value, value]，键值与键名是一致的（或者说只有键值，没有键名）
可以遍历，方法有：add、delete、has
WeakSet
成员都是对象
成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏
不能遍历，方法有add、delete、has
Map
本质上是键值对的集合，类似集合
可以遍历，方法很多可以跟各种数据格式转换
WeakMap
只接受对象作为键名（null除外），不接受其他类型的值作为键名
键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
不能遍历，方法有get、set、has、delete


async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
await的含义为等待，也就是 async 函数需要等待await后的函数执行完成并且有了返回结果（Promise对象）之后，才能继续执行下面的代码。await通过返回一个Promise对象来实现同步的效果。

ES5/ES6 的继承除了写法以外还有什么区别？
1、class 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量。
2、class 声明内部会启用严格模式。
3、class 的所有方法（包括静态方法和实例方法）都是不可枚举的。
4、class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用。
5、必须使用 new 调用 class。
6、class 内部无法重写类名。

JS 异步解决方案的发展历程以及优缺点。
1. 回调函数（setTimeout callback）缺点：回调地狱，不能用 try catch 捕获错误，不能 return  优点：解决了同步的问题
2. Promise 优点：解决了回调地狱的问题 缺点：无法取消 Promise ，错误需要通过回调函数来捕获
3. Generator 特点：可以控制函数的执行，可以配合 co 函数库使用 
4. Async/await async、await 是异步的终极解决方案 优点是：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题 缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

如何实现一个 new?
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
	// 根据规范，返回 null 和 undefined 不处理，依然返回obj
    return ret instanceof Object ? ret : obj;
}

简单讲解一下 http2 的多路复用 ？
HTTP2采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。
多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。

介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景?
观察者模式中主体和观察者是互相感知的，发布-订阅模式是借助第三方来实现调度的，发布者和订阅者之间互不感知
都是某个对象(subject, publisher)改变，使依赖于它的多个对象(observers, subscribers)得到通知。
总的来说，发布-订阅模式适合更复杂的场景。
在「一对多」的场景下，发布者的某次更新只想通知它的部分订阅者？
在「多对一」或者「多对多」场景下。
两者的区别：
	1.观察者模式中，观察者知道Subject ,两者是相关联的，而发布订阅者只有通过信息代理进行通信
	2.在发布订阅模式中，组件是松散耦合的。正好和观察者模式相反。
	3.观察者大部分是同步的，比如事件的触发。Subject就会调用观察者的方法。而发布订阅者大多数是异步的。
	4.观察者模式需要在单个应用程序地址空间中实现，而发布订阅者更像交叉应用模式。

1、首先token不是防止XSS的，而是为了防止CSRF的；
2、CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token

在我看来 Virtual DOM 真正的价值从来都不是性能，而是它 
1) 为函数式的 UI 编程方式打开了大门；
2) 可以渲染到 DOM 以外的 backend，比如 ReactNative。

web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。

vuex中为什么把把异步操作封装在action，把同步操作放在mutations？
这样 devtools 就可以打个 snapshot 存下来，然后就可以随便 time-travel 了。

介绍 HTTPS 握手过程
第一步，爱丽丝给出协议版本号、一个客户端生成的随机数（Client random），以及客户端支持的加密方法。
第二步，鲍勃确认双方使用的加密方法，并给出数字证书、以及一个服务器生成的随机数（Server random）。
第三步，爱丽丝确认数字证书有效，然后生成一个新的随机数（Premaster secret），并使用数字证书中的公钥，加密这个随机数，发给鲍勃。
第四步，鲍勃使用自己的私钥，获取爱丽丝发来的随机数（即Premaster secret）。
第五步，爱丽丝和鲍勃根据约定的加密方法，使用前面的三个随机数，生成"对话密钥"（session key），用来加密接下来的整个对话过程。

HTTPS 握手过程中，客户端如何验证证书的合法性
（1）首先浏览器读取证书中的证书所有者、有效期等信息进行校验，校验证书的网站域名是否与证书颁发的域名一致，校验证书是否在有效期内
（2）浏览器开始查找操作系统中已内置的受信任的证书发布机构CA，与服务器发来的证书中的颁发者CA比对，用于校验证书是否为合法机构颁发
（3）如果找不到，浏览器就会报错，说明服务器发来的证书是不可信任的。
（4）如果找到，那么浏览器就会从操作系统中取出颁发者CA 的公钥(多数浏览器开发商发布
版本时，会事先在内部植入常用认证机关的公开密钥)，然后对服务器发来的证书里面的签名进行解密
（5）浏览器使用相同的hash算法计算出服务器发来的证书的hash值，将这个计算的hash值与证书中签名做对比
（6）对比结果一致，则证明服务器发来的证书合法，没有被冒充

为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片
能够完成整个 HTTP 请求+响应（尽管不需要响应内容）
触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
跨域友好
执行过程无阻塞
相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
GIF的最低合法体积最小（最小的BMP文件需要74个字节，PNG需要67个字节，而合法的GIF，只需要43个字节）

介绍下如何实现 token 加密
需要一个secret（随机数）
后端利用secret和加密算法(如：HMAC-SHA256)对payload(如账号密码)生成一个字符串(token)，返回前端
前端每次request在header中带上token
后端用同样的算法解密

模拟实现一个 Promise.finally
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

ES6 代码转成 ES5 代码的实现思路是什么
将代码字符串解析成抽象语法树，即所谓的 AST
对 AST 进行处理，在这个阶段可以对 ES6 代码进行相应转换，即转成 ES5 代码
根据处理后的 AST 再生成代码字符串

如何解决移动端 Retina 屏 1px 像素问题
1 伪元素 + transform scaleY(.5)
2 border-image
3 background-image
4 box-shadow

介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面
1.当修改了一个或多个文件；
2.文件系统接收更改并通知webpack；
3.webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；
4.HMR Server 使用webSocket通知HMR runtime 需要更新，HMR运行时通过HTTP请求更新jsonp；
5.HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

Vue 的父组件和子组件生命周期钩子执行顺序是什么
父组建： beforeCreate -> created -> beforeMount
子组件： -> beforeCreate -> created -> beforeMount -> mounted
父组件： -> mounted
总结：从外到内，再从内到外

let const var
let 的「创建」过程被提升了，但是初始化没有提升。
var 的「创建」和「初始化」都被提升了。
function 的「创建」「初始化」和「赋值」都被提升了。

react-router 里的 <Link> 标签和 <a> 标签有什么区别
从最终渲染的 DOM 来看，这两者都是链接，都是 <a> 标签，区别是：
<Link> 是 react-router 里实现路由跳转的链接，一般配合 <Route> 使用，react-router 接管了其默认的链接跳转行为，区别于传统的页面跳转，<Link> 的“跳转”行为只会触发相匹配的 <Route> 对应的页面内容更新，而不会刷新整个页面。
而 <a> 标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面（非锚点情况）。

设计并实现 Promise.race()
const PromiseRace = (iterable)=>{
    return new Promise((resolve, reject) => {
      for (const p of iterable) {
        Promise.resolve(p).then(resolve).catch(reject)
      }
    })
}


vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？ #145
并没有发现 vue 会自动做事件代理，但是一般给 v-for 绑定事件时，都会让节点指向同一个事件处理程序（第二种情况可以运行，但是 eslint 会警告），一定程度上比每生成一个节点都绑定一个不同的事件处理程序性能好，但是监听器的数量仍不会变，所以使用事件代理会更好一点
