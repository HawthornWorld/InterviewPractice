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