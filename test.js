
function putZeroToEnd(arr){
    var flag = -1

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element == 0){
            if(flag < 0){
                flag = i
            }
        }else{
            if(flag >= 0){
                arr[flag] = arr[i]
                arr[i] = 0
                flag++
            }
        }
    }

    console.log(JSON.stringify(arr))
    

    return arr
}

  function setWatcher(page, watch) {
    Object.keys(watch).forEach(key => {
        let watchFun = watch[key]
        let val = page.data[key]
  
        Object.defineProperty(page.data, key, {
            configurable: true,
            enumerable: true,
            set: function (value) {
                watchFun.call(page, value, val);
                val = value;
            },
            get: function () {
                return val;
            }
        });
    });
  }



function Foo(){
      debugger
    this.getName = function(){ 
        debugger//alert(1)
         }
    return this
}

Foo.getName = function(){ 
    debugger //alert(2)
     }

Foo.prototype.getName = function(){ 
    debugger//alert(3)
     }

var getName = function(){ 
    debugger//alert(4)
     }

function getName(){ 
    debugger//alert(5)
     }

// Foo.getName()   // 2
// getName()       // 4
// Foo().getName() // 1
// getName()       // 1
// new Foo.getName()   // 2
// new Foo().getName()     // 3
// new new Foo().getName() // 3


for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        (function(){
            console.log(i);
        })(i)
    }, 100);
}


':123456px;font-size:2px'.replace(/:(\d+)px/g,function(val){
  return ':' + parseFloat(val.substr(1)) * 2 + 'rem'
})

";123456px".replace(/;(\d+)(px)/g, `;${$2 + 2}` + 'rem')

':123456px;font-size:2px'.match(/:(\d+)px/g)


setTimeout(function(){
    console.log(1);

    Promise.resolve().then(() => {
        console.log('Promise1');
    })
}, 0)

setTimeout(function(){
    console.log(2);

    Promise.resolve().then(() => {
        console.log('Promise2');
    })
}, 0)

new Promise(function executor(resolve){
    console.log(2);
    resolve()
    console.log(3);
}).then(function(){
    console.log(4);

})
console.log(5);

for (var i = 0; i< 10; i++){
    ((i) => {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    })(i)
}
