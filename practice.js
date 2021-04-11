// proxy
// let user = {
//     name: 'xxx',
//     age: 20
// }
// let proxy = new Proxy(user, {
//     get(target, property, receiver) {
//         console.log('receiver', receiver)
//         let value = target[property];
//         if (!value) {
//             throw Error(`your property ${property} is not exist`)
//         }
//         return value;
//     },
//     set(target, property, value) {
//         target[property].value = value
//     }
// })

// console.log(proxy)


// let obj = {
//     a: 1,
//     b: 2,
// }

// const p = new Proxy(obj, {
//     get(target, key, receiver) {
//         console.log('receiver', receiver)

//         if (key === 'c') {
//             return '我是自定义的一个结果';
//         } else {
//             return target[key];
//         }
//     },

//     set(target, key, value) {
//         if (value === 4) {
//             target[key] = '我是自定义的一个结果';
//         } else {
//             target[key] = value;
//         }
//     }
// })

// console.log(p.a)


// receiver Proxy {a: 1, b: 2}[[Handler]]: Object[[Target]]: Object[[IsRevoked]]: false

var obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
  });
  
  //typecript
  
  // 16进制转10进制  parseInt toString
  function convert() {
  
  }
  
  // 实现bind
  
  // promise 的各种实现
  
  // async await
  
  // reflect
  
  // set map
  
  // 实现装饰器
  
  // 实现class
  
  class Parent {
    constructor(name) {
      this.name = name;
    }
  
    /**
     * 静态方法，通过 Parent 调用
     */
    static getMe() {
      console.log("this is super");
    }
  
    /**
     * 公共方法，在 prototype 上
     */
    getName() {
      console.log(this.name);
    }
  }
  
  const sub = new Parent('xxx')
  console.log(sub.getName())
  
  
  //  class  flex:1  飞书  
  // webpack流程 和 优化
  
  
  
  
  
  // es6 class
  function _defineProperties(target, prop) {
    prop.forEach(ele => {		//可能会传入多个属性
      Object.defineProperty(target, ele.key, {
        value: ele.value,
        writable: true,
        configurable: true,
      })
    });//设置所设置的属性是否可写，可枚举
  }
  
  function _createClass(_constructor, _prototypeProperties, _staticProperties) {						//这里传入的三个参数分别是构造函数，原型上的属性，静态属性
    if (_prototypeProperties) {   //设置公有属性
      _defineProperties(_constructor.prototype, _prototypeProperties)
    }
    if (_staticProperties) {  //设置静态属性
      _defineProperties(_constructor, _staticProperties)
    }
  }
  
  function _classCallCheck(_this, _constructor) {
    if (!(_this instanceof _constructor)) {     //判断是否是通过new(创建实例)来调用_constructor
      throw "TypeError: Class constructor AirPlane cannot be invoked without 'new'"
    }
  }
  var FatherPlane = (function () {
    function FatherPlane(name, color) {
      _classCallCheck(this, FatherPlane)
      this.name = name || 'liu';
      this.color = color || 'red'
    }
    _createClass(FatherPlane, [
      {
        key: 'fly',
        value: function () {
          console.log('fly')
        }
      }
    ], [
      {
        key: 'static',
        value: function () {
          console.log('static')
        }
      }
    ])
    return FatherPlane;
  })()
  var airplane = new FatherPlane()
  
  
  // 继承
  function extend(subClass, superClass) {
    var prototype = object.create(superClass.prototype);//创建对象
    prototype.constructor = subClass;//增强对象
    subClass.prototype = prototype;//指定对象
  }
  function Father(name) {
    this.name = name;
  }
  Father.prototype.sayName = function () {
    alert(this.name);
  };
  function Son(name, age) {
    Father.call(this, name);//继承实例属性，第一次调用Father()
    this.age = age;
  }
  //Son.prototype = new Father();
  //不创建新的父类实例而是用extend完成
  extend(Son, Father);
  
  
  function extend(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
  
  }
  
  
  
  
  function GrandFather() {
    this.name = 'xxx'
  
  }
  
  function Father() {
    GrandFather.call(this)
  }
  
  Father.prototype = new GrandFather()
  
  function Son() {
    Father.call(this)
  }
  Son.prototype = new Father()
  
  let s = new Son()
  console.log(s instanceof Son)
  
  let f = new Father()
  console.log(f instanceof Father)
  console.log(f instanceof GrandFather)
  console.log(s instanceof Father)
  
  
  
  
  function Parent2() {
    this.name = 'ppp'
  }
  
  function Sub2() {
    Parent2.call(this)
  }
  
  Sub2.prototype = Object.create(Parent2.prototype)
  // Sub2.prototype.constructor = Sub2
  
  let sss = new Sub2()
  console.log(sss instanceof Sub2)
  
  // 继承的本质就是复制，即重写原型对象，代之以一个新类型的实例（构造函数调用是实例属性方法不是继承）
  
  // 实现new
  function mynew(obj) {
    let o = new Object();
    let res = obj.call(o);
    o.__proto__ = obj.prototype;
    return res instanceof Object ? res : o;
  }
  
  function test() {
    this.name = 'test'
  }
  test.prototype.getName = function () {
    return this.name
  }
  let n = mynew(test)
  console.log(n instanceof test)
  
  // 寄生式继承 在原型式继承的基础上 增强对象 返回构造函数
  function createObj(obj) {
    let myObj = Object(obj);
    myObj.sayHi = () => {
      console.log('hi')
    }
    return myObj
  }
  
  // 寄生组合式继承
  function A() {
    this.name = 'aaa'
  }
  
  function B() {
    A.call(this)
  }
  // 寄生式防止多次调用父类构造函数
  B.prototype = Object.create(A.prototype)
  B.prototype.constructor = B
  // 增强对象
  B.prototype.sayHi = function () {
  
  }
  
  let b = new B()
  
  
  // 今天要解决的问题：
  
  
  
  /**
   * 千分位匹配 \B非单词边界 \b单词边界
   */
  function matchStr(str) {
    let reg = /\B(?=(\d{3})+\b)/g;
    return str.replace(reg, ",");
  }
  /**
   * 非正则
   */
  function matchStr(str) {
    let len = str.length,
      rest = len % 3;
    if (len < 3) {
      return str
    }
    for (var i = len - 1; i > 0; i--) {   // 12345
      if ((i - rest) % 3 === 0) {
        console.log('i', i, str.substring(0, i))
        str = str.substring(0, i).concat(',', str.substr(i))
      }
    }
    console.log(str)
    return str
  }
  matchStr("12345")
  
  console.log('hhh', '1234567'.substr(1, 4))
  
  // 字符串转驼峰 ()代表匹配字串 可以传到回调参数里面去
  function converseCamel(str) {
    // return str.replace(/_(\w)/g, ($, $1) => {
    return str.replace(/_([a-zA-z])/g, ($, $1) => {
      return $1.toUpperCase()
    })
  }
  console.log(converseCamel('hello_world'))
  
  // console.log('hello_world'.match(/_[a-z]/g))
  
  //  let reg = /\B(\d{3})+\b/g
  
  
  let name = 'aaa bbb ccc';
  uw = name.replace(/\b\w+\b/g, function (word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  })
  console.log('uw', uw)
  
  
  
  // 一个星期只能用两次的问题
  class Cal {
    constructor() {
      this.days = [0, 0, 0, 0, 0, 0, 0]
    }
    add(left, right) {
      if (left > 6 || right > 6 || left < 0 || right < 0 || left > right) {
        return false
      }
      let moreThen2 = false;
      for (let i = left; i <= right; i++) {
        if (this.days[i] >= 2) {
          moreThen2 = true;
          return false;
        }
      }
      if (!moreThen2) {
        for (let j = left; j <= right; j++) {
          this.days[j]++
        }
      }
      return true
    }
  }
  let cal = new Cal()
  console.log(cal.add(1, 3)) // true
  console.log(cal.add(2, 4)) // true
  console.log(cal.add(2, 5)) // false
  
  
  // 浏览器渲染详细
  
  // 实现instanceof: 检测构造函数的prototype属性是否出现在某个实例的原型链上
  function instance(s, p) {
    // let s
  }
  
  // promise all race finally promise异步任务串行化
  
  // http2.0
  
  // 事件循环结果输出
  
  // express 路由
  
  // legao定位组件发布订阅细节
  
  // react setstate
  
  // iconfont原理
  
  // cdn
  
  // 性能优化全面总结
  
  // 实现reduce map forEach 提高手写代码能力 验证能力
  
  // fetch API
  
  // nodejs
  
  
  // const promise = new Promise((resolve, reject) => {
  //   reject("error");
  //   resolve("success2");
  // });
  // promise
  // .then(res => {
  //     console.log("then1: ", res);
  //   }).then(res => {
  //     console.log("then2: ", res);
  //   }).catch(err => {
  //     console.log("catch: ", err);
  //   }).then(res => {
  //     console.log("then3: ", res);
  //   })
  
  
  const promise1 = new Promise((resolve, reject) => {
  
  
  });
  promise1
    .then(res => {
      console.log("then1: ", res);
    })
  
  
  
  const promise2 = new Promise((resolve, reject) => {
    reject("error");
  });
  promise2
    .then(res => {
      console.log("then2: ", res);
    }).catch(err => {
      console.log("then3: ", err);
    }).then(res => {
      console.log("then4: ", res);
    })
  
  
  
  async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
    setTimeout(() => {
      console.log('timer1')
    }, 0)
  }
  async function async2() {
    setTimeout(() => {
      console.log('timer2')
    }, 0)
    console.log("async2");
  }
  async1();
  setTimeout(() => {
    console.log('timer3')
  }, 0)
  console.log("start")
  
  // async1 start
  // async2
  // start
  // async1 end
  // timer2
  // timer3
  // timer1
  
  
  async function async1() {
    console.log('async1 start');
    await new Promise(resolve => {
      console.log('promise1')
    })
    console.log('async1 success');
    return 'async1 end'
  }
  console.log('srcipt start')
  async1().then(res => console.log(res))
  console.log('srcipt end')
  // srcipt start
  // async1 start
  // promise1
  // srcipt end
  
  
  async function async1() {
    console.log('async1 start');
    await new Promise(resolve => {
      console.log('promise1')
      resolve('promise1 resolve')
    }).then(res => console.log(res))
    console.log('async1 success');
    return 'async1 end'
  }
  console.log('srcipt start')
  async1().then(res => console.log(res))
  console.log('srcipt end')
  
  
  
  async function async1() {
    console.log('async1 start');
    await new Promise(resolve => {
      console.log('promise1')
      resolve('promise resolve')
    })
    console.log('async1 success');
    return 'async1 end'
  }
  console.log('srcipt start')
  async1().then(res => {
    console.log(res)
  })
  new Promise(resolve => {
    console.log('promise2')
    setTimeout(() => {
      console.log('timer')
    })
  })
  // srcipt start
  // async1 start
  // promise1
  // promise2
  // async1 success
  // async1 end
  // timer
  
  
  
  async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }
  
  async function async2() {
    console.log("async2");
  }
  
  console.log("script start");
  
  setTimeout(function () {
    console.log("setTimeout");
  }, 0);
  
  async1();
  
  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    console.log("promise2");
  });
  console.log('script end')
  // script start
  // async1 start
  // async2
  // promise1
  // script end
  // async1 end
  // promise2
  // setTimeout
  
  
  
  // 用promise实现每隔1s输出一个数字
  const arr = [1, 2, 3]
  arr.reduce((p, x) => {
    return p.then(() => {
      return new Promise(r => {
        setTimeout(() => r(console.log(x)), 1000)
      })
    })
  }, Promise.resolve())
  
  // 异步任务串行化
  
  // flatten(n)
  
  // 性能优化全面总结
  
  // fetch
  
  // 浏览器渲染
  
  //   (function () {
  //     var a = b = 3
  //   })()
  // console.log(typeof a !== undefined)
  // console.log(typeof b !== undefined)
  
  
  
  
  // 优化函数
  
  function init(a) {
    if (a !== 'a' || a !== 'b' || a !== 'c') return;
    eval('do' + a.toUpperCase())();
    return
  }
  
  
  // 实现一个函数 调用该函数后每当页面有未处理的error和未捕获的rejection时 在控制台打出'error'字符串
  // window.onerror = dumpException
  // function dumpException(msg, url, l) {
  //   console.log('error')
  // }
  // dumpException()
  // Promise.reject(new Error('some error')) // 控制台打出error
  // throw new Error('some error') // 控制台打出error
  
  
  // function dumperror() {
  //   window.addEventListener('error', (error) => {
  //     console.log('error');
  //   }, true)
  //   window.addEventListener("unhandledrejection", function (e) {
  //     e.preventDefault()
  //     console.log('error');
  //     return true
  //   });
  // }
  // dumperror()
  
  function dumpException() {
    const errConstructor = Error.constructor;
    Error = function(...args) {
        console.log('error');
        errConstructor.apply(this, args);
    }
  }
  dumpException()
  
  // Promise.reject(new Error('some error')) // 控制台打出error
  throw new Error('some error') // 控制台打出error
  
  
  
  
  // 导航守卫执行顺序
  
  // 在失活的组件里调用beforeRouteLeave
  // beforeEach
  // beforeRouteUpdate(组件被重用时调用)
  // beforeEnter(路由独享)
  // beforeRouteEnter(在被激活的组件内调用 不能访问this，组件实例被创建之前， 可在next()内部访问组件实例)
  // beforeResolve
  // 导航被确认
  // afterEach
  // 触发dom更新
  // beforeRouteEnter的next回调
  
  
  // network performance memory
  
  
  // async await  顺序问题
  
  // 函数柯里化
  function curry(fn) {
    let args = arguments;
    let len = fn.length;
    let idx = 0;
    if(idx < len -1) {
      fn.apply(this, args[idx])
    } else {
      return
    }
  }
  
  function fn1(a,b,c,d) {
    return a + b + c + d
  }

  