// 不重复最长子串
// function lengthOfLongestSubstring(s) {
//   var res = ""; //用于存放最长无重复字串
//   var str = ""; //用于存放无重复子串
//   for (var i = 0; i < s.length; i++) {
//     var char = s.charAt(i);
//     var index = str.indexOf(char);
//     if (index === -1) {
//       str += char;
//       res = res.length < str.length ? str : res;
//     } else {
//       str = str.substr(index + 1) + char; // 重复之后串从重复位置重新开始累计
//     }
//   }
//   console.log(res.length);
//   return res.length;
// }

// lengthOfLongestSubstring("abcdghjajkluiuiujkg");

// function longStr(s) {
//   if (s.length === 0) return "";
//   let resStr = "",
//     str = "";
//   for (var i = 0; i < s.length; i++) {
//     let char = s[i];
//     let index = str.indexOf(char);
//     if (index < 0) {
//       str += char;
//       // str累加 和 需要返回的resStr比较 取较长
//       resStr = resStr.length > str.length ? resStr : str;
//     } else {
//       str = str.substr(index) + char;
//     }
//   }
//   console.log(resStr);
//   return resStr;
// }
/**
 * 千分位匹配
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
    rest = len%3;
    if(len < 3) {
        return str
    }
    for (var i = len - 1; i > 0; i--) {
      if ((i-rest) % 3 === 0) {
          str = str.substring(0, i).concat(',',str.substr(i))
      }
    }
    console.log(str)
    return str
  }
  matchStr("1111211233223")
  /**
   * 找到数组中第k个最大元素
   */
  // function maxOfk(nums, k) {
  //   nums.sort((a, b) => {
  //     return a - b;
  //   });
  //   nums.reverse();
  //   return nums[k - 1];
  // }
  // console.log(maxOfk([1, 2, 3, 4, 4, 5, 6], 2));
  /**
   * 找出数组中最小的K个数，以任意顺序返回这k个数均可
   */
  // function getLeastNumbers(arr, k) {
  //   return arr
  //     .sort((a, b) => {
  //       return a - b;
  //     })
  //     .slice(0, k);
  //   //   return res;
  // }
  // console.log("jjjjjjjjj", getLeastNumbers([3, 2, 1], 2));
  
  /**
   * 插入排序
   */
  function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let pre = 0;
      while (pre < i) {
        arr[i] ^= arr[pre];
        arr[pre] ^= arr[i];
        arr[i] ^= arr[pre];
      }
      pre++;
    }
    console.log('arr',arr)
    return arr
  }
  // insertSort([1,26,3,5,6,23,2,7])
  /**
   * 选择排序
   */
  // function selectSort(arr) {}
  
  /**
   * 整数数组nums, 找到具有最大和的连续子数组，返回最大和
   */
  // function longArr(nums) {
  //   let resTotal = 0,
  //     subNumsTotal = 0,
  //     subNums = [];
  //   for (var i = 0; i < nums.length; i++) {
  //     let item = nums[i];
  //     subNumsTotal += item;
  //     resTotal = resTotal > subNumsTotal ? resTotal : subNumsTotal;
  //   }
  //   return resTotal;
  // }
  // console.log(longArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  
  // 判断类型
  // 实现一个ES6模板字符串
  // 实现match函数
  // 实现简单模板引擎
  // 如何实现一个sleep函数
  // 前K个最大的元素
  // 数字金额千分位转换，如 14290023.23 为 14,290,023.23，使用正则和非正则两种方式
  // 写一个解析url的函数parseUrlParam，把查询参数转成对象
  // 排序
  // object.assign
  // 正则表达式
  // 双指针题目
  // 继承
  // node
  // http细节
  // 题目整理 根据题目看自己还缺哪些知识以及哪些不熟
  // 函数组件 容器组件
  // async await generator yield
  // 项目掰扯
  // 函数科里化
  // lodash
  // 垃圾回收机制 https://zhuanlan.zhihu.com/p/60336501
  // pushstate replacestate
  // 事件循环
  // router导航守卫执行顺序
  // canvas
  
  //正则表达式
  // let regex = /hello/;
  // console.log(regex.test('hellodhsd'))
  
  // let reg = /ab{2,5}c/g; 表示数字连续出现2到5次 范围匹配（连续）
  // let string = 'abcabbcabbbcabbbbcabbbbbcabbbbbbc'
  // console.log(string.match(reg))
  
  // let reg = /ab[123]c/g;
  // let reg = /[1-6a-fG-M]/g;
  // let string = '00123456abcdefGHIJKLMN'
  // let reg = /a[^abc]d/g;
  // let string = 'abd acd aad afd'
  // let reg = /\d{2,5}?/g;
  
  // let reg = /\d??/g;
  // let string = '1 2 312 34 1234 5123456'
  
  // let reg = /good|nice/g;
  // let string = 'good idea nice'
  // let reg = /goodbye|good/g;
  // let string = 'goodbye'
  // console.log(string.match(reg)) // 分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了
  
  // var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
  // console.log( regex.test("223:59") );
  // console.log( regex.test("02:07") );
  
  // var regex = /(0?[0-9]|1[0-9]|[2][0-3]):0?[0-9]|[1-5][0-9]$/;
  // console.log( regex.test("2:7") );
  
  // // 匹配日期 2017-06-10
  // reg = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
  // console.log(reg.test("2020-04-16"))
  
  // *贪婪匹配 ?惰性匹配 .通配符 表示匹配任何字符 *范围匹配  合起来表示匹配任意长度任意字符
  // var regex = /id=".*?"/  会回溯 效率有点低
  // var regex = /id="[^"]*?"/;
  // var string = '<div id="container" class="main"></div>';
  // console.log(string.match(regex)[0]);
  
  // diff, brower render, 继承, 父子组件嵌套生命周期执行顺序（vue: 父created,子created,子mounted,父mounted）
  // react hooks + redux + ts,  basic enhance, suanfa
  // project: 页面数据统计：aid sid 渠道参数工作原理， 分享数据及从分享链接点击进来的数据，pageid， clickid
  // export export.default
  // 一天研究一个弱势问题 晚上刷题 白天忙技术栈和项目
  


  // 字符串反转
  //'how _ do+you do' >> 'do you+do _ how'
  // function strReverse(s) {
  //     let arr = s.split(' ');
  //     let stack = [];
  //     for(let i = 0; i< arr.length; i++) {
  //         stack.push(arr[i])
  //     }
  //     let str = '';
  //     while(stack.length != 0) {
  //         str += stack.pop() + " "
  //     }
  //     return str
  // }
  // strReverse('how _ do+you do')
  
  function strReverse(s) {
    let w = [];
    let str = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === " " || s[i] === "+") {
        w.push(str);
        w.push(s[i]);
        str = "";
      } else {
        str += s[i];
      }
      if (i === s.length - 1 && str !== "") {
        w.push(str);
      }
    }
    return w.reverse().join("");
  }
  
  console.log(strReverse("how _ do+you do"));
  
  // 用正则匹配
  let reggg = /(\w)+|(\+)+|(\s)?/g;
  console.log(
    "string",
    "how _ do+you do"
      .match(reggg)
      .reverse()
      .join("")
  );
  
  // promise
  
  
  
  
  function createValidator(target,)
  
  //super 在静态方法中使用super super指向父类而不是父类的原型对象 且方法内部的this指向当前子类 而不是子类的实例 
  // class A {
  //   constructor() {
  //     this.x = 1;
  //   }
  //   static print() {
  //     console.log(this.x);
  //   }
  // }
  // class B extends A {
  //   constructor() {
  //     super();
  //     this.x = 2;
  //   }
  //   static m() {
  //     super.print();
  //   }
  // }
  // B.x = 3;
  // B.m() // 3
  
  
  
  // proxy
  let user = {
    name: 'xxx',
    age: 20
  }
  let proxy = new Proxy(user, {
    get(target, property, receiver) {
        console.log('receiver', receiver)
        let value = target[property];
        if (!value) {
            throw Error(`your property ${peoperty} is not exist`)
        }
        return value;
    },
    set(target, property, value) {
        target[property].value = value
    }
  })
  
  console.log(proxy)



  // Promise.resolve().then(() => {
//     console.log(0);
//     return Promise.resolve(4);
// }).then(res => {
//     console.log(res);
// })

// Promise.resolve().then(() => {
//     console.log(1);
// }).then(res => {
//     console.log(2);
// }).then(res => {
//     console.log(3);
// }).then(res => {
//     console.log(5);
// }).then(res => {
//     console.log(6);
// })


// var a = 10;
// function foo() {
//    console.log('aaa',a)
//    var a = 20
// }
// foo()

// 那么这个呢？
// var a = 10;
// function foo() {
//     console.log(a)
//     let a = 20
// }
// foo()

// 数组交集 排序  双指针扫描
function intersect(arr1, arr2) {
  let k = 0, j = 0, res = [];
  arr1.sort((a,b) => a - b);
  arr2.sort((a,b) => a - b);
  while(k < arr1.length && j < arr2.length) {
      if(arr1[k] < arr2[j]) {
        k++
      }
      if(arr1[k] > arr2[j]) {
        j++
      }
      if(arr1[k] === arr2[j]) {
        res.push(arr1[k]);
        k++;
        j++;
      }
  }
  return res;
}
console.log(intersect([2,2,3,4,1,5], [2,2,8,7,6,5,4]));



// /**
//  *
//  * @param {*} total
//  * @param {*} weightArr
//  * @param {*} fetchOrderArr
//  */
// function maxWeight(total, weightArr, fetchOrderArr) {

// }

//  /^[a-zA-Z]([0-9a-zA-Z]+$)(?![a-zA-Z]+$)/
//
// function test(userName) {
// 	const reg1 = /^[a-zA-Z](.*)[0-9]+(.*)/;
// 	const reg2 = /^[a-zA-Z]([0-9a-zA-Z]+$)(?![a-zA-Z]+$)/;
// 	if (reg1.test(userName) && reg2.test(userName)) {
// 		console.log("Accept");
// 	} else {
// 		console.log("Wrong");
// 	}
// }

// test("Hhhh666");

// // 解构赋值改名字
// const obj = { a: 1, b: 2 };
// const { a: c } = obj;
// console.log(c); // 1

