import { hidden } from "ansi-colors";

//----------------------------------------------------------------------------------------flatten--------------------------------------------------------------------------------------------

function accumulator(arr) {
  return arr.reduce((result, item) => {
    return result + item;
  }, 0);
}

// console.log(accumulator([1,2,3,4,5,6]))

// console.log([1,2,3,4,5,6].reduce((a,b)=> {
//     return a+b
// }))

// https://juejin.im/post/5adc8e396fb9a07aa0479725

/**
 * reduce
 * @params []
 * reduce 第二个参数要是不传的话,默认取第一个
 * return两次
 */
function flatten1(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

/**
 * 字符串分隔取数字1
 * @param {d} arr
 */
function flatten2(arr) {
  return arr
    .toString()
    .split(",")
    .map(item => {
      return Number(item);
    });
}

/**
 * 字符串分隔取数字2
 * @param {d} arr
 */
function flatten3(arr) {
  return arr
    .join(",")
    .split(",")
    .map(item => {
      return Number(item);
    });
}

/**
 * 递归
 * @param {*} arr
 */
function flatten4(arr) {
  var res = [];
  arr.map(item => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item)); // 什么时候需要赋值，什么时候直接操作数组？
    } else {
      res.push(item);
    }
  });
  return res;
}

/**
 * 拓展运算符
 * @param {*} arr
 */
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flatten([5, 4, 2, [8, 7, [9, [2, 4, [7, 2, [1, 2]]]]]]));

// 遍历数组arr，若arr[i]为数组则递归遍历，直至arr[i]不为数组然后与之前的结果concat

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * 防抖
 * 一定时间之内连续触发，清除定时器重新计时。
 * 适用场景:
 * @param {*} fn
 * @param {*} delay
 */
function debounce(fn = () => {}, delay = 0) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
/**
 * 节流
 * 规定一段时间内只能触一次函数，如果触发多次只有一次生效
 * @param {*} fn
 * @param {*} delay
 */
function throttle(fn = () => {}, delay = 0) {
  let last = +new Date();
  let timer = null;
  return function() {
    let self = this,
      args = arguments,
      now = +new Date();
    clearTimeout(timer);
    if (now - last > delay) {
      fn.apply(self, args);
      last = now;
    } else {
      timer = setTimeout(() => {
        fn.apply(self, args);
      }, delay);
    }
  };
}

function throttle(fn = ()=> {}, delay=0) {
  let isRuning = true,
  timer = null;
  return function(...args) {
    if(isRuning) {
      return
    }
    clearTimeout(timer)
    timer = setTimeout(()=> {
      fn.apply(this)
      isRuning = false
    }, delay) 
  }
}

/**
 * 实现千分位，正则
 */
function numberFormat1(number) {
  if (isNaN(number)) {
    return;
  }
  if (number.toString().indexOf(".")) {
    return number.toLocaleString();
  } else {
    let reg = /(?!^)(?=(\d{3})+$)/g;
    return number.toString().replace(reg, ","); // '$1,' 和 "," 区别
  }
}
/**
 * 不用正则实现
 */
function numberFormat(number) {
  if (isNaN(number)) {
    return;
  }
  if (number.toString().indexOf(".")) {
    return number.toLocaleString();
  } else {
    // 处理千分位逻辑
    //
  }
}

console.log(numberFormat(344340));

//-------------------------------------------------------------------------------------------实现API------------------------------------------------------------------------------

// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// 要累加对象数组中包含的值，必须提供初始值，以便各个item正确通过你的函数。
// 写法1
function reduceforArrSet() {
  // reduce的应用, 数组去重
  let arr = [1, 2, 2, 3, 5, 3, 6, 6, 6];
  let resu = arr.reduce((acc, v) => {
    if (acc.indexOf(v) < 0) acc.push(v);
    return acc;
  }, []);
  return resu;
}

// 写法2
function reduceforArrSet() {
  // reduce的应用, 数组去重
  let arr = [1, 2, 2, 3, 5, 3, 6, 6, 6];
  let resu = arr.sort().reduce((acc, v) => {
    if (acc.length === 0 || acc[acc.length - 1] !== v) acc.push(v);
    return acc;
  }, []);
  return resu;
}

function reduce() {
  var initialValue = 0;
  var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function(
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue.x;
  },
  initialValue);
  console.log(sum); // logs 6
}

// 将二维数组转化为一维
function reduce() {
  var flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ].reduce(function(a, b) {
    return a.concat(b);
  }, []);
}
// 计算数组中国每个元素出现的次数
function countTimes() {
  let arr = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
  let resu = arr.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});
  return resu;
}
console.log("countTimes", countTimes());

// 实现reduce how?
// reducer 接受四个参数 accumulator, currVal, currIndex
function reduce(reducer, orginVal) {}

// arr.join([separator])
// separator 可选
// 指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（,）分隔。如果separator是空字符串("")，则所有元素之间都没有任何字符。
function join() {}

// 随机数组 简易方式
// https://www.jianshu.com/p/6083878010d1
function randomsort(arr) {
  let tempArr = arr.slice();
  tempArr.sort(() => 0.5 - Math.random());
  return tempArr;
}

// 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
// 示例 1:
// 输入: [3, 1, 4, 1, 5], k = 2
// 输出: 2
// 解释: 数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
// 尽管数组中有两个1，但我们只应返回不同的数对的数量。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {};
console.log(findPairs([3, 1, 4, 1, 5]));
// 1 2 4 4 6 6 7 8    4

// 实现一个简单的模板引擎 vue的模板是靠自己的模板引擎解析成常见的html
// render('我是{{name}},年龄{{age}},性别{{sex}}',{name:'小山楂', age:'18'})
// 结果 我是小山楂 年龄18 性别undefined
var render = function(tpl, data) {
  tpl.replace(/\{\{(.+?)\}\}/g, function(m, m1) {
    console.log("m", m, m1);
    return data[m1];
  });
};
console.log(
  render("我是{{name}},年龄{{age}},性别{{sex}}", { name: "小山楂", age: "18" })
);

// test replace callcack
var str = "please make heath your first proprity";
str = str.replace(/(^|\s)([a-z])/g, function(word, p1, p2) {
  console.log(p1, p2);
  return p1 + p2.toUpperCase();
});
console.log(str);

//proxy
// var target = {};
// var handler = {
//     get: function(target,propKey,receiver) {
//         return '222'
//     },
//     set: function(target,propKey,receiver) {
//         return '222'
//     },
// };
// var proxy = new Proxy(target,handler);
// proxy.a = '333';
// console.log('proxy', proxy.a)
// console.log('proxy', target.a)
var obj = new Proxy(
  {},
  {
    get: function(target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function(target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
  }
);
obj.count = 1;
++obj.count;

//闭包
//case1
function F1() {
  var a = 100;
  //返回一个函数(函数作为返回值)
  return function() {
    console.log(a);
  };
}

var f1 = F1();
var a = 200;
f1(); // 100

// case2
function F1() {
  var a = 100;
  return function() {
    console.log(a); //自由变量，父作用域寻找
  };
}

var f1 = F1();

function F2(fn) {
  var a = 200;
  fn();
}

F2(f1); // 100

// // 只会弹出一次
// var i,a
// for(i = 0;i<10;i++){
// 	a = document.createElement('a')
// 	a.innerHTMl = i + '<br>'
// 	a.addEventListener('click',function(e){
// 		e.preventDefault()
// 		alert(i)
// 	})
// 	document.body.appendChild(a)
// }

// // 每次点击都会弹出
// var i,a
// for(i = 0;i < 10;i++){
// 	(function(i){
// 		var a = document.createElement('a')
// 		a.innerHTML = i + '<br>'
// 		a.addEventListener('click',function(e){
// 			e.preventDefault()
// 			alert(i)
// 		})
// 		document.body.appendChild(a)
// 	})(i)
// }

// 闭包实际应用中主要用于封装变量，收敛权限
function isFirstLoad() {
  var _list = [];
  return function(id) {
    if (_list.indexOf(id) >= 0) {
      return false;
    } else {
      _list.push(id);
      return true;
    }
  };
}
var firstLoad = isFirstLoad();
console.log(firstLoad(10)); // true

function foo() {
  console.log("aaa", this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; // 函数别名

var a = "oops, global"; // a是全局对象的属性

bar(); // "oops, global"
obj.foo();

// 原型链

// js多态 实现方式：1.重写  2.重载
// 同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。换句话说，给不同的对象发送同一个消息的时候，这些对象会根据这个消息分别给出不同的反馈。

// function petEat(pet) {
//     pet.eat()
// }
// function Dog() {

// }
// Dog.prototype.eat = function() {
//     console.log('吃肉')
// }
// function Cat() {

// }
// Cat.prototype.eat = function() {
//     console.log('吃鱼')
// }

// petEat(new Dog())
// petEat(new Eat())

// es6

// array  keys values entries
// 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历
var arr = ["a", , "c"];

var sparseKeys = Object.keys(arr);
console.log(sparseKeys); // ['0', '2']

var denseKeys = [...arr.keys()];
console.log(denseKeys); // [0, 1, 2]

let letter = ["a", "b", "c"];
let entries = letter.entries();
let value1 = entries.next().value;
console.log("entries", ...entries);
console.log("entries", value1);

console.log(Object.keys({ a: 1, b: 2, c: 3 }));

// promise
//load一张图片
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error("can not resolve"));
    };
    image.src = url;
  });
}

// load多张图片
function loadMultiImageAsync(urlArr) {
  let multiImg = urlArr,
    promiseAll = [],
    img = [],
    len = multiImg.length;
  for (let i = 0; i < urlArr.length; i++) {
    promiseAll[i] = new Promise((resolve, reject) => {
      img[i] = new Image();
      img[i].src = url;
      img[i].onload = () => {
        resolve(img[i]);
      };
      img[i].onerror = () => {
        reject(new Error("can not resolve"));
      };
    });
  }
  Promise.all(promiseAll).then(img => {
    // 全部加载完成
  });
}

// es6 class learn
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  doStuff() {}
  toString() {
    console.log("(" + this.x + "," + this.y + ")");
  }
}

// =
// Point.prototype = {
//     constructor(){

//     },
//     toString(){
//     }
// }

let p = new Point(2, 3);

p.toString();

p.constructor = Point.prototype.constructor;
// 一次向类添加多个方法
Object.assign(Point.prototype, {
  toValue() {}
});
// 不可枚举 （不同于es5， es5是可枚举的)
Object.keys(Point.prototype); // []
console.log(Object.getOwnPropertyNames(Point.prototype));
console.log(typeof Point);

// constructor return not default
class Foo {
  constructor() {
    return Object.create(null);
  }
  toString() {}
}
// Foo() // TypeError: Class constructor Foo cannot be invoked without 'new'
new Foo(); // right

//

class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }
  get html() {
    return this.element.innerHTML;
  }
  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype,
  "html"
);
console.log("descriptor", descriptor);
"get" in descriptor; // true
"set" in descriptor; // true

// notes

var Fooooo = class {};
class Bar extends Fooooo {}

console.log("...");

// 静态方法
// class Foo1 {
//   classMethod() {
//     this.method = this.method.bind(this);
//     // console.log('hello')
//   }
//   method() {
//     console.log("ssss");
//   }
// }
// const foo1 = new Foo1();
// const { classMethod } = foo1;
// classMethod();

// class Logger {
//   printName(name = "there") {
//     this.printName = this.printName.bind(this);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const logger = new Logger();
// const { printName } = logger;
// printName(); // TypeError: Cannot read property 'print' of undefined

// 老写法
class Foo2 {
  // ...
}
Foo2.prop = 1;

const foo2 = new Foo2();
console.log("f0000", foo2.prop);

// 工厂模式 创建多个相似对象
function createFactory(name, age, sex) {
  let obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  obj.getName = function() {
    return this.name;
  };
  return obj;
}

const obj1 = new createFactory("a", "b", "c");
console.log(obj1.getName());

// 单例模式 确保一个类仅有一个实例，并提供一个访问它的全局访问点。
// function singeleton(name) {
//     this.name = name
//     // this.instance = null // 改为用闭包实现
// }
// singeleton.prototype.getName = function() {
//     console.log(this.name)
// }
// singeleton.getInstance = (function(name) {
//     var instance = null
//     return function(name) {
//         if(!this.instance) {
//             this.instance = new singeleton()
//         }
//         return this.instance
//     }
// })()

// const ass = singeleton.getInstance('a')
// const bss = singeleton.getInstance('b')
// console.log(ass===bss)

// 好一点的实现方式 不需要知道getINstance这个方法

function CreateSingleton(name) {
  this.name = name;
  this.getName();
}
CreateSingleton.prototype.getName = function() {
  console.log(this.name);
};
var Singleton = (function() {
  var instance;
  return function(name) {
    if (!instance) {
      instance = new CreateSingleton(name); //不是this.instance
    }
    return instance;
  };
})();

const ass = new Singleton("a");
const bss = new Singleton("b");
console.log(ass === bss);

// // 防抖 一点时间内连续点击 清除定时器重新计时（适用于搜索联想 resize窗口
// function debounce(fn = () => {}, delay = 0) {
//   let timer = null;
//   return function(...args) {
//     // 回调函数需要传参
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       // 要写函数句柄
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// // 节流 一段时间内 多次点击 只触发一次 （适用于点击滚动事件
// function throttle(fn = () => {}, delay = 0) {
//   let timer = null,
//     last = +new Date();
//   return function(...args) {
//     let self = this;
//     let now = +new Date();
//     if (now - last > delay) {
//       fn.apply(self,args);
//     } else {
//         clearTimeout(timer);
//         timer = setTimeout(()=> {
//             fn.apply(self,args)
//         },delay)
//     }
//   };
// }

// class
class A {
  constructor() {
    this.name = "mmm";
  }
}

class B extends A {
  constructor() {
    super();
    this.name = "mmm";
  }
}
const BB = new B();
console.log("jjj", BB.name);
console.log(A.prototype.constructor);

// foreach
Array.prototype.forEach = function(fn) {
  var len = this.length;
  for (let i = 0; i < len; i++) {
    fn(this[i], i);
  }
};
//map
Array.prototype.map = function(fn) {
  let len = this.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push(fn(this[i], i));
  }
  return res;
};

//盛最多水的容器
function maxWater(arr) {
  let len = arr.length;
  if (len < 2) {
    return;
  }
  let i = 0,
    j = len - 1,
    max = 0;
  while (i < j) {
    temp = Math.min(arr[i], arr[j]) * (j - i);
    max = Math.max(max, temp);
    if (arr[i] < arr[j]) {
      i++;
      while (arr[i] < arr[i - 1]) {
        i++;
      }
    } else {
      j--;
      while (arr[j] < arr[j + 1]) {
        j--;
      }
    }
  }
  return max;
}

/**
 * @param {number[]}
 * @return {number}
 */
var maxArea = function(height) {
  var len = height.length;
  if (len < 2) return 0;
  var max = 0;
  var l = 0;
  var r = len - 1;
  while (l < r) {
    var temp = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(temp, max);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

// 闭包 作用域
// const coder = {
//   skills: ["js", "css"],
//   run: function() {
//     for (var i = 0; i < this.skills.length; i++) {
//       var self = this;
//       (function(i) {
//         setTimeout(() => {
//           console.log("coder", self.skills[i]+i);
//         }, 1000*(i+1));
//       })(i);
//     }
//   }
// };

// coder.run();

