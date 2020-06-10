Array.prototype.toString.call([1, 2, 3]);
Array.prototype.toString.call({ a: 1, b: 2, c: 3 });

/**
 * 实现map
 * map(fn: (currentVal: number, index?: number, array?: number[]) => number, thisArg?: Object)
 * */

Array.prototype.myMap = function (fn, thisArg) {
	let arr = this,
		res = [];
	if (!Array.isArray(arr)) throw new TypeError("Array must be an array");

	for (let i = 0; i < arr.length; i++) {
		let tmp = fn.call(
			thisArg !== undefined ? thisArg : arr,
			arr[i],
			i,
			arr
		);
		res.push(tmp);
	}
	// console.log("res11", res);
	return res;
};

// 用reduce实现map
Array.prototype.myMapWithReduce = function (fn, thisArg) {
	let arr = this,
		res = [];
	if (!Array.isArray(arr)) throw new TypeError("Array must be an array");
	// arr.reduce 内部直接改变res 不需要res = arr.deduce
	arr.reduce((acc, cur, idx, arr) => {
		h = fn.call(thisArg !== undefined ? thisArg : arr, cur, idx, arr);
		res.push(h);
	}, null); // 此处null一定要传，否则cur从数组第二位开始
	return res;
};

let arr0 = [1, 2, 3, 4];
function fn0(cur, idx) {
	cur = cur * (idx + 1);
	return cur;
}
let ressss = arr0.myMapWithReduce(fn0);
// console.log("ressss", ressss);

/**
 * forEach
 * forEach(fn: (currentVal: number, index?: number, array?: number[]) => void, thisArg?: Object)
 */
Array.prototype.myForEach = function (fn, thisArg) {
	let arr = this;
	if (!Array.isArray(arr)) throw new TypeError("Array must be an array");
	for (let i = 0; i < arr.length; i++) {
		fn.call(thisArg !== undefined ? thisArg : arr, arr[i], i, arr);
	}
};

/**
 * reduce
 * reduce(fn: (accumulator: number, currentVal:number, index?: number, array?: number[]) => number, initialVal?:number)
 */
Array.prototype.myReduce = function (fn, initialVal) {
	let arr = this;
	if (!Array.isArray(arr)) throw new TypeError("Array must be an array");
	if (arr === []) throw new Error("Array can not be empty");
	let acc = arr[0],
		startIdx = 0;
	if (initialVal !== undefined) {
		acc = initialVal;
		startIdx = 1;
	}
	for (let i = startIdx; i < arr.length; i++) {
		// 回调函数返回累计值
		acc = fn(acc, arr[i], i, arr);
	}
	return acc;
};

/**
 * filter
 * filter(fn: (currentVal:number, index?: number, array?: number[]) => boolean, thisArgs?: Object)
 */
Array.prototype.myFilter = function (fn, thisArg) {
	let arr = this;
	if (!Array.isArray(arr)) throw new TypeError("Array must be an array");
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		let isTrue = fn.call(thisArg !== undefined ? thisArg : arr, arr[i], i);
		if (isTrue) {
			res.push(arr[i]);
		}
	}
	return res;
};

/**
 * splice
 * splice(start: number, deleteCount?: number, insertItem?:item )
 */
// Array.prototype.mySplice = function (start, deleteCount, ...rest) {
// 	let arr = this,
// 		restLen = rest.length;
// 	if (start > arr.length) return arr = arr.concat(rest);
// 	for (let i = start; i < arr.length; i++) {
// 		// （经验帖）从start开始遍历即可
// 		if (restLen > 0) {
//             //先删除再插入
// 、			// let tmpIdx = 0;
// 			// while (tmpIdx < restLen) {
// 			// 	arr[i] = rest[tmpIdx];
// 			// 	tmpIdx++;
// 			// }
// 			// arr[i] = arr[i + deleteCount];
// 		}
// 		// arr[i] = arr[i + deleteCount];
// 	}
// 	// arr.length = arr.length - deleteCount;
// 	return arr;
// };

// let arr1 = [1, 3, 3, 4];
// let res = arr1.mySplice(1, 1, 8);
// console.log(res);

/**
 * flat
 * flat(deepth?: number)
 * deepth 默认值为1 传入infinity可展开任意深度的嵌套数组
 */
Array.prototype.myFlat = function (depth = 1) {
	let arr = this;
	if (!Array.isArray(arr)) throw new TypeError("Array must be an array");
	let res = [];
	// 辅助函数
	let helper = function (arr, depth, res) {
		for (let i = 0; i < arr.length; i++) {
			// （经验帖）开销小的条件放在前面
			if (depth > 0 && Array.isArray(arr[i])) {
				// （经验帖）直接传入--deepth
				helper(arr[i], --depth, res);
			} else {
				// note:此处不是concat
				res.push(arr[i]);
			}
		}
	};
	helper(arr, depth, res);
	return res;
};
// let arr = [1, [2, 3, [4, 5, 6, [7, 8, 9]]]];
// let res = arr.myFlat();
// console.log("flat", res);

/**
 * 深拷贝
 * deepCopy(source: object)
 * return {Object}
 */
function deepCopy(source) {
	// (note) "[object Object]" 第一个o小写, 第二个o大写
	if (Object.prototype.toString.call(source) !== "[object Object]")
		throw new TypeError("arguments must be an object");
	let helper = function (source) {
		let res = {};
		for (k in source) {
			if (
				Object.prototype.toString.call(source[k]) === "[object Object]"
			) {
				res[k] = helper(source[k]);
			} else {
				res[k] = source[k];
			}
		}
		return res;
	};
	let final = helper(source);
	return final;
}
// let obj = { a: 1, b: 2, c: { d: 3 } };
// let resObj = deepCopy(obj);
// console.dir("resObj", resObj);

/**
 * 实现函数求斐波那契数列的第n项
 * fib(n: number): number
 * 1 1 2 3 5 8 13 21 34 55 89
 */
// 动态规划写法
function fib(n) {
	let arr = [1, 1];
	for (let i = 2; i < n; i++) {
		arr[i] = arr[i - 2] + arr[i - 1];
	}
	// console.log(arr);
	return arr[n - 1];
}
let fib1 = fib(8);
// console.log(fib1);
// 递归写法
function fib2(n) {
	if (n <= 1) {
		return n;
	} else {
		return fib2(n - 1) + fib2(n - 2);
	}
}

// leetcode198 错误解法
// var rob = function (nums) {
//     let len = nums.length;
//     if(len === 0) return 0;
//     if(len === 1) return nums[0];
// 	let sum1 = nums[0],
// 		sum2 = nums[1];
// 	for (let i = 2; i < len; i++) {
// 		// sum1 += i % 2 === 0 ? 0 : nums[i];
// 		i % 2 === 0 ? (sum1 += nums[i]) : (sum2 += nums[i]);
//     }
//     // (经验帖) 使用Math.max 不要自己比较
// 	return Math.max(sum1, sum2);
// };
// console.log("rob", rob([1, 2, 3, 1]));
// 打家劫舍
var rob = function (nums) {
	let len = nums.length;
	let dp = [];
	// 初始值
	dp[0] = nums[0];
	dp[1] = Math.max(nums[0], nums[1]);
	for (let i = 2; i < len; i++) {
		// 状态转移方程 dp[i]是到达当前房间能偷到的最多钱
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
	}
	return dp[len - 1];
};

// leetcode 62 二维dp

/**
 * some
 * some(fn(currentVal:number)=> boolean)
 */
Array.prototype.mySome = function (fn, thisArg) {
	let arr = this,
		isTrue = false;
	for (let i = 0; i < arr.length; i++) {
		isTrue = fn.call(thisArg !== undefined ? thisArg : arr, arr[i]);
		if (isTrue) return true;
	}
	return false;
};

/**
 * every
 */
Array.prototype.myEvery = function (fn, thisArg) {
	let arr = this,
		isTrue = false;
	for (let i = 0; i < arr.length; i++) {
		isTrue = fn.call(thisArg !== undefined ? thisArg : arr, arr[i]);
		if (!isTrue) return false;
	}
	return true;
};

// 一段时间内只触发一次回调, 多次触发则在设置的间隔时间之后触发
function throttle1(fn = () => {}, delay) {
	let isRun = false;
	let timer = null;
	return function (...args) {
		if (!isRun) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(this, args);
				isRun = true;
			}, delay);
		} else {
			fn.apply(this, args);
		}
	};
}

function throttle2(fn = () => {}, delay) {
	let last = +new Date();
	let timer = null;
	return function (...args) {
		let now = +new Date();
		if (delay > now - last) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(this, args);
			}, delay);
		} else {
			fn.apply(this, args);
			last = now;
		}
	};
}
// 在事件被触发n秒后执行回调，如果在这n秒内又被触发，则重新计时
function debounce(fn = () => {}, delay) {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

/**
 * curry
 * 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
 * */
// function myCurry(fn) {
// 	let argLen = fn.length;
// 	let args = [];
// 	let self = this;
// 	return function () {
// 		args = args.concat(Array.prototype.slice.call(arguments));
// 		if (args.length < argLen) {
// 			return arguments.callee;
// 		}
// 		return fn.apply(self, args);
// 	};
// }
// const add = function (a, b, c, d) {
// 	return a + b + c + d;
// };
// const res = myCurry(add);
// res(a)(b)(c)(d);
/**
 * sleep
 * */

/**
 * 数组去重
 */

/**
 * 数组交集 并集 差集
 */

// 大数相加
// 手写 bind
// 实现加法
// 实现 compose
// 剪枝
// 循环有序列表的查找
// 实现继承
// 拍平数组
// 实现 getUrlParams
// 用 reduce 实现 map
// 用栈实现队列
// 判断是否是完全二叉树
// 实现 lensProp
// 判断链表是否成环
// 最长公共子序列
// 最长公共子串
// 实现千分位展示
// 无序不相等数组中，选取 N 个数，使其和为 M
// 实现简化的 Promise
// 实现快排
// 周期执行某个函数 n 次
// 字符串反转
// 函数节流
// 实现 Math.sqrt
// 判断一个字符串是否另一个字符串的子序列
// 实现一个极简的模板引擎
// 实现一个极简的数据响应式
// 千分位转数字
// 将数字转化为中文（数字是 10 万以内）
// 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
// 获取页面所有的 tagname
// 实现 XPath
// hash map
// k-diff 数对
// 最长有效括号
// 实现match
// 找到出现次数最多的字符
// 每天只能用两次 class add
// 字符串下划线反转
// [1,100]线段长度
// 下划线命名转驼峰
// 作用域输出问题

// 字节题目二：
// var a = 10;
// (function(){
//     console.log(a); // 'undefined'
//     a = 5;
//     console.log(window.a); // 10
//     var a = 20;
//     console.log(a); // 20
// })()

// var a = 10;
// (function(){
//     console.log(a); // Cannot access 'a' before initialization'
//     a = 5;
//     console.log(window.a); // 前面报错 后面不能输出了
//     let a = 20;
//     console.log(a);// 前面报错 后面不能输出了
// })()

// 字节题目一：
// inner = "window";
// function say() {
// 	console.log(inner);
// 	console.log(this.inner);
// }
// var obj1 = (function () {
// 	var inner = "1-1";
// 	return {
// 		inner: "1-2",
// 		say: function () {
// 			console.log(inner);
// 			console.log(this.inner);
// 		},
// 	};
// })();

// var obj1 = {
// 	inner: "1-2",
// 	say: function () {
// 		console.log(inner);
// 		console.log(this.inner);
// 	},
// };

// var obj2 = (function () {
// 	var inner = "2-1";
// 	return {
// 		inner: "2-2",
// 		say: function () {
// 			console.log(inner);
// 			console.log(this.inner);
// 		},
// 	};
// })();

// say();
// // 'window'
// // 'window'
// obj1.say();
// // '1-1'
// // '1-2'
// obj2.say();
// // '2-1'
// // '2-2'
// obj1.say = say;
// obj1.say();
// // 'window'
// // '1-2'
// obj1.say = obj2.say;
// obj1.say();
// // '2-1'
// // '1-2'

// var a = 10010;

// var obj = {
// 	a: 10086,
// 	fn: function () {
// 		console.log(this);
// 		console.log(this.a);
// 	},
// };

// obj.fn();

// let foo = obj.fn;
// foo();

// var obj3 = {
// 	a: 10000,
// 	fn: function () {
// 		console.log(this);
// 		console.log(this.a);
// 	},
// };

// obj.fn = obj3.fn;
// obj.fn();
// obj3.fn();

// function Foo() {
// 	getName = function () {
// 		console.log(1);
// 	};
// 	return this;
// }
// Foo.getName = function () {
// 	console.log(2);
// };
// Foo.prototype.getName = function () {
// 	console.log(3);
// };
// var getName = function () {
// 	console.log(4);
// };
// function getName() {
// 	console.log(5);
// }

// //答案：
// Foo.getName(); //2
// getName(); //4
// // Foo().getName(); //4
// getName(); //4
// new Foo.getName(); //2
// new Foo().getName(); // 3
// console.dir("new foo()", new Foo());
// new new Foo().getName(); // 3

// 被问的查找方面的算法：
// 查找树的所有节点
// 查找页面dom中一共使用了多少种ID,以及每个id被使用的次数
// 二叉树的遍历方式有哪些

// function levelOrder(node) {
// 	let queue = [];
// 	const res = [];
// 	if (root !== null) {
// 		let node = queue.push(root);
// 		while (queue.length > 0) {
// 			let node = queue.shift();
// 			res.push(node);
// 			if (node.children.length > 0) {
// 				node.children.forEach((item) => {
// 					queue.push(item);
// 				});
// 			}
// 		}
// 	}
// 	console.log('res', res)
// }

// 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
// 例如三叉树返回 [
// 	[1],
// 	[3,2,4],
// 	[5,6]
// ]
// 关键点；如何分层
// function levelOrder2(root) {
// 	let queue = [];
// 	const res = [];
// 	if (root !== null) {
// 		let node = queue.push(root);
// 		let floorIdx = 0;
// 		res[0] = [root];
// 		let isFirst = true;
// 		while (queue.length > 0) {
// 			if(isFirst) {
// 				floorIdx++;
// 				res[floorIdx] = [];
// 			}
// 			let node = queue.shift();
// 			res[floorIdx].push(node);
// 			if(queue.length === 0) {
// 				floorIdx++;
// 				res[floorIdx] = [];
// 			}
// 			if (node.children.length > 0) {
// 				node.children.forEach((item) => {
// 					queue.push(item);
// 				});
// 			}
// 		}
// 	}
// 	console.log('res', res)
// }

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.children = [];
// 	}
// }

// let root = new Node(1);

// let r1 = new Node(2);
// let r2 = new Node(3);
// let r3 = new Node(4);

// root.children.push(r1);
// root.children.push(r2);
// root.children.push(r3);

// let r4 = new Node(5);

// r2.children.push(r4);

// levelOrder2(root);

function levelOrder(root) {
	let queue = [];
	let res = [];
	if (root !== null) {
		queue.push(root);
		while (queue.length > 0) {
			let node = queue.shift();
			res.push(node);
			if (node.children.length > 0) {
				node.children.forEach((item) => {
					queue.push(item);
				});
			}
		}
	}
	console.log("***res****", res);
}

function levelOrderWithSplit(root) {
	if (root !== null) {
		// Array[number[]]
		let res = [];
		let queue = [];
		queue.push(root);
		while (queue.length > 0) {
			let size = queue.length;
			let tmpLevel = [];
			while (size > 0) {
				let node = queue.shift();
				tmpLevel.push(node.val);
				if (node.children.length > 0) {
					node.children.forEach((item) => {
						queue.push(item);
					});
				}
				size--;
			}
			res.push(tmpLevel);
		}
		console.log('---res---',res);
		return res;
	} else {
		return [];
	}
}

class Node {
	constructor(val) {
		this.val = val;
		this.children = [];
	}
}
let root = new Node(1);
let r1 = new Node(2);
let r2 = new Node(3);
let r3 = new Node(4);
root.children.push(r1);
root.children.push(r2);
root.children.push(r3);

let r4 = new Node(5);
r3.children.push(r4);

levelOrderWithSplit(root);



