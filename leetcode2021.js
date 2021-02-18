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