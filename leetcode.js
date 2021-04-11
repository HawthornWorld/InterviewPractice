/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//双层遍历 O(n^2)
var twoSum = function(nums, target) {
    const len = nums.length;
    if(len < 2) return [];
    for(let i=0; i < len; i++) {
        for(let j=i+1; j < len; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};

//哈希表算法 O(n)
// note: [2,3],4  [2,2,3],4 这两种边界需兼容
var twoSum = function(nums, target) {
    const map = {};
    const len = nums.length;
    let result = [];
    if(len < 2) throw new Error('nums length is not enough');
    // 边建hash表边执行主要操作
    for(let i = 0; i < len; i++) {
        const another =  target - nums[i];
        if(map[another] !== undefined) {
            result = [i, map[another]]
        } else {
            map[nums[i]] = i;
        }
    }
    // console.log('1', map);
    // let result = [];
    // Object.keys(map).forEach(key => {
    //     const diff =  target - key;
    //     console.log('2', key, diff);

    //     if(map[diff] !== map[key] && map[diff] !== undefined) {
    //         result = [map[key], map[diff]]
    //     }
    // })
    return result;
};

// console.log(twoSum([2,5], 4))


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 输入: nums = [5,6,5,6], target = 11  输出: [[5,6],[5,6]]
 * 需兼容边界：[6,6,0,5,5,1,1,0], 6 会有重复的数对
 * 思考：map 的value 不一定存的是key对应的索引，还可以是key出现的次数
 */
var pairSums = function(nums, target) {
    const len = nums.length;
    if(len < 2) return [];
    const map = {};
    const result = [];
    for(let i = 0; i < len; i++) {
        const diff = target - nums[i];
        // if(map[diff] !== undefined) {
        //     result.push([diff, nums[i]]);
        //     // 删掉已push项
        //     map[diff] = undefined;
        // } else {
        //     // 重复key无法建表
        //     map[nums[i]] = i;
        // }
        // 修改为如下：
        if(map[diff] > 0) {
            result.push([diff, nums[i]]);
            const value = map[diff] - 1;
            value ? map[diff] = value : map[diff] = 0;

        } else {
            map[nums[i]] = (map[nums[i]] || 0 ) + 1
        }
    }
    return result;
};

console.log('3333',pairSums([2, 1, 8, 6, 5, 7, -1, 3, 5, 5], 7))


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 输入: nums = [5,6,5,6], target = 11  输出: [[5,6],[5,6]]
 */
var pairSums = function(nums, target) {
    let res = [] , map = new Map()
    for( let num of nums ) {
        let key = target - num
        if ( map.has(key) ) {
            res.push([key,num])
            let value = map.get(key) - 1
            // 如果剩余次数还有 用剩余次数覆盖原次数 好巧妙啊
            value ? map.set(key,value) : map.delete(key)
            // console.log('1', map)
        } else {
            // map中的value存的是key出现的次数
            map.set(num,(map.get(num) || 0 ) + 1)
            console.log('3', map)
        }
    }
    return res
};

// ??? 如果当前遍历到的值 在map中存在 就往map中存入当前的key value 否则 删掉map中的key value 
// console.log([...new Set('abbbbd')])



/**
 * 双指针解法
 * 时间复杂度O(n) 还是 O(nlogn)?
 */
var pairSums = function(nums, target) {
    // 升序排列
    nums.sort((x, y) => x - y)
    let start = 0, end = nums.length - 1, result = [];
    while(start < end) {
        if(nums[start] + nums[end] === target) {
            result.push([nums[start],nums[end]])
            start++
            end--
        }
        if(nums[start] + nums[end] < target) {
            start++
        }
        if(nums[start] + nums[end] > target) {
            end--
        }
    }
    return result;
}


// var pairSums = function(nums, target) {
//     nums.sort((x, y) => x - y)
//     var start = 0, end = nums.length-1, result = new Array()
//     while (start < end) {
//         if (nums[start] + nums[end] === target) {
//             result.push(
//                 [nums[start], nums[end]]
//             )
//             start++
//             end--
//         } else if (nums[start] + nums[end] > target) {
//             end--
//         } else if (nums[start] + nums[end] < target) {
//             start ++
//         }
//     }
//     return result
// };


// // note: sort在不传入回调函数时默认采用字典序排序 且负数在做绝对值越小越在左
// console.log('111',[-2,-1,0,3,5,6,7,9,13,14].sort())
// console.log('222',[-2,-1,0,3,5,6,7,9,13,14].sort((x,y) => x - y))
// console.log('333', [-2, -1, 0,3,5,6,7,9,13,14,7,2,3,1,2,5].sort())



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 编写一个函数来判断 t 是否是 s 的字母异位词
 * 边界判断：长度相等即可结束执行
 * str.split('') 用es6写法为：[...str]
 * */
var isAnagram = function(s, t) {
    if(s.length() !== t.length()) return false;
    if(s.split('').sort().join('') === t.split('').sort().join('')) return true;
    return false;
}

/**
 * 
 * @param {*} s 
 * @param {*} t 
 * 哈希表实现
 * 两个字符串中字符出现的种类和次数均相等
 * 方法：维护一个长度是26的频次数组table，遍历s存出现频次，遍历t减去table中记录的次数，如果出现table[i] < 0,说明包含一个t不存在于s中的字符，return false
 * 长度相等的两个字符串，频次相减，如果有人频次是正，就必然有人频次是负
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for (let i = 0; i < t.length; ++i) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            console.log('table',t[t.codePointAt(i) - 'a'.codePointAt(0)])
            return false;
        }
    }
    return true;
};
console.log(isAnagram('qaqamn','abcdef'));


var reverseString = function(s) {
    const n = s.length;
    for (let left = 0, right = n - 1; left < right; ++left, --right) {
        [s[left], s[right]] = [s[right], s[left]];
    }
};


// 原地交换
a = 1;
b = 2;
a = a ^ b;
console.log('aaaaaaaaaaaaaa',a)
b = b ^ a;
console.log('bbbbbbbbbbbbbb',b)
a = a ^ b;
console.log('aaaaaaaaaaaaaa',a)
// [a, b] = [b, a];
// console.log(a, b);

console.log('012345678 6334'.replace(/\B(?=(\d{3})+\b)/g, ','))

// /\B(?=(\d{3})+\b)/g


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 * 692. 前K个高频单词：
 * 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4 输出: ["the", "is", "sunny", "day"] 
 * 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，出现次数依次为 4, 3, 2 和 1 次。相同次数的，按字母顺序排序
 */
var topKFrequent = function(words, k) {
    const len = words.length;
    let result = [];
    let map = {};
    for(let i = 0; i < len; i++) {
        if(map[words[i]]) {
            map[words[i]] += 1
        } else {
            map[words[i]] = 1
        }
    }
    // note: 需要先按照字典序排序一遍
    result = Object.keys(map).sort().sort((a,b) => {
        return map[b] - map[a];
    }).slice(0, k)
    return result;
};
topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2);


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 编写一个函数来判断 t 是否是 s 的字母异位词
 */
var isAnagram = function(s, t) {
    if(s.split('').sort().join('') === t.split('').sort().join('') ) return true;
    return false;
}; console.log(isAnagram('anagram', 'nagaram'))




//一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
//动态规划问题：三个要素 1. 动态方程  2.
// 每次跳的时候，小青蛙可以跳一个台阶，也可以跳两个台阶，也就是说，每次跳的时候，小青蛙有两种跳法。第一种跳法：第一次我跳了一个台阶，那么还剩下n-1个台阶还没跳，
// 剩下的n-1个台阶的跳法有f(n-1)种。第二种跳法：第一次跳了两个台阶，那么还剩下n-2个台阶还没，剩下的n-2个台阶的跳法有f(n-2)种。所以，小青蛙的全部跳法就是这两种跳法之和了，即 f(n) = f(n-1) + f(n-2);
function f1(n) {
	// 递归解法 性能很差
	if (n <= 2) return n;
	return f(n - 1) + f(n - 2);
}

function f2(n) {
	let dp = [1, 2];
	for (let i = 2; i < n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n - 1];
}

// 求斐波那契数列第n项
function fiber1(n) {
	if (n <= 2) return 1;
	return fiber(n - 1) + fiber(n - 2);
}
function fiber2(n) {
	let res = [1, 1];
	for (let i = 2; i < n; i++) {
		res[i] = res[i - 1] + res[i - 2];
		res.push(res[i]);
	}
	return res[n];
}

// 两个链表的第一个公共节点
function interscetNode(headA, headB) {}

function mapLinkedList(head) {
	let node = head;
	// while(node !== null) {
	//     console.log(node.val);
	//     node = node.next;
	// }
	// 倒序打印
	// let arr = [];
	// while(node !== null) {
	//     arr.push(node.val)
	//     node = node.next;
	// }
	// for(let i = arr.length-1; i >= 0; i--) {
	//     console.log(arr[i])
	// }

	// 倒序打印 递归写法
	if (node !== null) {
		if (node.next !== null) {
			// node = node.next;
			mapLinkedList(node.next);
		}
		console.log(node.val);
	}
}

function nodeList(val) {
	this.val = val;
	this.next = null;
}
let node1 = new nodeList(1);
let node2 = new nodeList(2);
node1.next = node2;

let node3 = new nodeList(3);
let node4 = new nodeList(4);
let node5 = new nodeList(5);
node2.next = node3;
node3.next = node4;
node4.next = node5;

mapLinkedList(node1);

// 递归 求n个数的和
function sum1(n) {
	if (n === 1) {
		return 1;
	} else {
		return sum1(n - 1) + n;
	}
}

function fact(n, r) {
	if (n <= 0) {
		return 1 * r;
	} else {
		return fact(n - 1, r * n);
	}
}

console.log(fact(5, 1));
// 尾递归

// 尾递归优化

// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型

// 数组去重 nlogn
function removeDup(arr) {
	arr.sort();
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] > arr[i]) {
			res.push(arr[i]);
		}
	}
	console.log("resssss", res);
	return res;
}

removeDup([1, 2, 2, 5, 2, 3, 1, 7, 8, 9, 5, 6]);

// 数组去重


(async (obj) => {
	if( k in Obj) {
		console.log('hello world')
	}
})()

