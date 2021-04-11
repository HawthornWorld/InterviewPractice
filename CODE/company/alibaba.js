

// 题目一：
// 请完成“空白处”代码，使得以下组件在选择时能够将合适的值打印出来
class Counter extends React.Component {
	select(val) {
		console.log('you have select' + val);
	}
	render() {
		return (<ul>
           { 
               ['a','b','c'].map((item, index) => {
                   {/* return <li onClick={this.select.bind(this,item)}>{item}</li> */}
                   // 或者
                   return <li onClick={(item) => { this.select(item) }}>{item}</li>

               })
           }
       </ul>)
	}
}


// 题目二：
// 请实现find函数，使下列的代码调用正确。
// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
	{userId: 8, title: 'title1'},
	{userId: 11, title: 'other'},
	{userId: 15, title: null},
	{userId: 19, title: 'title2'}
];

var find = function(origin) {
	//your code are here...
  return {
    where: function(obj) {
      const keys = Object.keys(obj);
      let res = [];
      keys.forEach(key => {
        let result = origin.filter(item => {
          return item[key].match(obj[key]);
        });
        res = res.concat(result);
      })

      return {
        orderBy: function(primaryKey, direction) {
          if(direction === 'desc') {
            res.sort((a,b) => a[primaryKey] < b[primaryKey]);
          } else {
            res.sort((a,b) => a[primaryKey] > b[primaryKey]);
          }
          return res;
        }
      }
    }
  }
  
}

//查找data中，符合条件的数据，并进行排序
var result = find(data).where({
	"title": /\d$/
}).orderBy('userId', 'desc');

console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];




// 题目三：
// 下面是一个redux中间件，补充“空白处”代码，使得dispatch支持action为函数作为返回值
  export default function() {
    return ({ dispatch, getState }) => next => action => {
      if (typeof action === 'Function') {
        return action(dispatch, getState);
      }
      return next(action);
    };
  };



// 题目四：
// 为 Function 扩展一个通用的方法 bindX，可以实现如下功能
  function add(num1, num2) {
      return this.value + num1 + num2;
  }

  var data = {
      value: 1
  };

  var addEx = add.bindX(data, 2);

  addEx(3);    // 6

  Function.prototype.bindX = function(...args) {
    const obj = args[0];
    const fn = this;
    return function(...params) {
      return fn.call(obj, args.slice(1), params)
    }
  }

  // 对比函数柯里化（攒参数）
  function myCurry(fn) {
	let argLen = fn.length;
	let args = [];
	let self = this;
	return function () {
		args = args.concat(Array.prototype.slice.call(arguments));
		if (args.length < argLen) {
			return arguments.callee;
		}
		return fn.apply(self, args);
	};
  }



// 题目五：
// 有一个数组，里面只存在 * 和 字母，比如 [‘*’, ‘d’, ‘c’, ‘*’, ‘e’, ‘*’, ‘a’, ‘*‘]。
// 现在需要把这个数组中的所有星号移动到左边，所有的字母移动到右边，所有字母的顺序不能改变。
function parse(arr){
   	 if(!Array.isArray(arr)) return new TypeError('param must be an array');
   	 let len = arr.length, starCount = 0, res = [];
     for(let i = 0; i < len; i++) {
       	if(arr[i] === '*') {
            starCount++
        } else {
          res.push(arr[i])
        }
     }
   	  for(let j = 0; j < starCount; j++) {
        res.unshift('*')
      }
   return res;
 }

 // 时间和空间复杂度都最小的写法
 function parseArr(arr) {
     
 }
 var arr = ['*', 'd', 'c', '*', 'e', '*', 'a', '*'];
 console.log(parse(arr));


 

/**
 * 对象扁平化
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），
 * 返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null, 
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */
function flatten(input) {
  let isArr = Array.isArray(val);
  let isObj = Object.prototype.toString.call(val) !== "[object Object]");
  let res;
  
  let arrHelper = function(arr,res) {
    let len = arr.length;
    for(let i=0; i<len; i++) {
        if(isArr(arr[i])) {
          arrHelper(arr[i],res)
        } else {
          res.push(arr[i])
        }
    }
  }
  let objHelper = function(obj, res) {
    for(let k in obj){
      if(isArr(obj(k) || isObj(obj(k)) {
        res[k] = objHelper(obj[k], res);
      } else {
        res[k] = obj[k]
      }
    }
  }
                
  if(isArr(input)){
    res = [];
    arrHelper(input, res);
    return res;
  } else if(isObj(input)) {
    res = {};
    objHelper(obj, res);
    return res;
  } else {
    throw new TypeError('Arguments type error');
  }
 
}
// 找出数组中重复最多的元素，需考虑健壮性
// 输入: [1, 22, 1, 22, 3, 3, 3]
// 输出: 3
var fn = function (arr) {
	if(!Array.isArray(arr)) return TypeError('param error');
  	const len = arr.length;
	if(len === 0) return [];
  	let obj = {};
  	for(const item of arr) {
      if(obj[item] === undefined) {
        obj[item] = 1;
      } else {
        obj[item] = obj[item] + 1;
      }
    }
  	const sortItems = Object.keys(obj).sort((a,b) => {
      return obj[b] - obj[a];
    })
    let res = [sortItems[0]];
  	for(let i = 0; i < len; i++) {
      if(sortItems[i] === sortItems[0]) {
        res.push(sortItems[i]);
      }
    }
  	 
  
  	
  	return res;
}

/*
给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），
输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，
这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。
如果不存在，则输出 -1。
from LeetCode https://leetcode-cn.com
*/

/*
输入: [1,3,1,2]
输出: [3,-1,2,3]
解释: 第一个 1 的下一个更大的数是 3；
数字 3 找不到下一个更大的数，输出 -1；
第二个 1 的下一个最大的数是 2；
2 的最大元素需要循环搜索，结果是 3。
*/

var fn = function (input) {
  	if(!Array.isArray(input)) return TypeError('param error');
  	const len = input.length;
  	if(len === 0) return [];
	let concatNumber = [...input, ...input];
  	let res = [];
  	let stack = [];
  	for(let i = 0; i < len; i++) {
      while(concatNumber[i] > concatNumber[stack[stack.length-1]]) {
        let idx = stack.pop();
        
        res[idx] = concatNumber[i];
      };
      stack.push(i);
    }
  	return res.slice(0, res.length/2);
}

// 如将 100000 转化为 100,000 格式

function milliFormat(num){
  if(isNaN(num)) return new TypeError('param should be a number');
  let tmp = num.toString();
  const res = tmp.replace(/\B(?=(\d{3})+$)/g,','); // /(?=(\B\d{3})+$)/g 也对
  return res;
}

function thousandth(num) {
  const numArr = (num + "").split("");
  const len = numArr.length;
  let cnt = 1;
  let resStr = "";
  for (let i = len - 1; i >= 0; i--) {
   resStr = numArr[i] + resStr;
   if (cnt % 3 === 0 && i !== 0) {
    resStr = "," + resStr;
   }
   cnt++;
  }
  return resStr;
 }
 
 console.log(thousandth(100028741000));





// 题目一：
// 请完成“空白处”代码，使得以下组件在选择时能够将合适的值打印出来
class Counter extends React.Component {
	select(val) {
		console.log('you have select' + val);
	}
	render() {
		return (<ul>
           { 
               ['a','b','c'].map((item, index) => {
                   return <li onClick={this.select.bind(this,item)}>{item}</li>
               })
           }
       </ul>)
	}
}


// 题目二：
// 请实现find函数，使下列的代码调用正确。
// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
	{userId: 8, title: 'title1'},
	{userId: 11, title: 'other'},
	{userId: 15, title: null},
	{userId: 19, title: 'title2'}
];

var find = function(origin) {
	//your code are here...
  return {
    where: function(obj) {
      const keys = Object.keys(obj);
      let res = [];
      keys.forEach(key => {
        let result = origin.filter(item => {
          return item[key].match(obj[key]);
        });
        res = res.concat(result);
      })
      return {
        orderBy: function(primaryKey, direction) {
          if(direction === 'desc') {
            res.sort((a,b) => a[primaryKey] < b[primaryKey]);
          } else {
            res.sort((a,b) => a[primaryKey] > b[primaryKey]);
          }
          return res;
        }
      }
    }
  }
  
}

//查找data中，符合条件的数据，并进行排序
var result = find(data).where({
	"title": /\d$/
}).orderBy('userId', 'desc');

console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];




// 题目三：
// 下面是一个redux中间件，补充“空白处”代码，使得dispatch支持action为函数作为返回值
  export default function() {
    return ({ dispatch, getState }) => next => action => {
      if (typeof action === 'Function') {
        return action(dispatch, getState);
      }
      return next(action);
    };
  };



// 题目四：
// 为 Function 扩展一个通用的方法 bindX，可以实现如下功能
  function add(num1, num2) {
      return this.value + num1 + num2;
  }

  var data = {
      value: 1
  };

  var addEx = add.bindX(data, 2);

  addEx(3);    // 6

  Function.prototype.bindX = function(...args) {
    const obj = args[0];
    const fn = this;
    return function(...params) {
      return fn.call(obj, args.slice(1), params)
    }
  }






// 题目五：
// 有一个数组，里面只存在 * 和 字母，比如 [‘*’, ‘d’, ‘c’, ‘*’, ‘e’, ‘*’, ‘a’, ‘*‘]。
// 现在需要把这个数组中的所有星号移动到左边，所有的字母移动到右边，所有字母的顺序不能改变。
var arr = ['*', 'd', 'c', '*', 'e', '*', 'a', '*'];

 function parse(arr){
   	 if(!Array.isArray(arr)) return new TypeError('param must be an array');
   	 let len = arr.length, starCount = 0, res = [];
     for(let i = 0; i < len; i++) {
       	if(arr[i] === '*') {
          startCount++
        } else {
          res.push(arr[i])
        }
     }
   	  for(let j = 0; j < startCount; j++) {
        res.unshift('*')
      }
   return res;
 }

 console.log(parse(arr));


/**
 * 对象扁平化
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），
 * 返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null,
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */
function flatten(input) {
	let isArr = (val) => Array.isArray(val);
	let isObj = (val) =>
		Object.prototype.toString.call(val) !== "[object Object]";
	let helper = function (input, res) {
		if (isArr(input)) {
			for (let i = 0; i < input.length; i++) {
                if (isArr(input[i])){

                }else if(isObj(input[i])){

                }else{
                    
                }
            }
		} else if (isObj(input)) {

		} else {
		}
	};
}
