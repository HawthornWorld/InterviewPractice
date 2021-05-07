// 三数之和 leetcode15 TODO: 不理解 第一种写法为什么会有遗漏 第二种为什么输出是空


// function threeNumSum(nums) {
//     nums.sort((a,b) => a - b);
//     const len = nums.length;
//     let n = 0, left = n + 1, right = len - 1 ;
//     let res = [];
//     while(left < right) {
//         let threeSum = nums[n] + nums[left] + nums[right];
//         if(threeSum === 0) {
//             res.push([nums[n],nums[left],nums[right]]);
//             n++;
//         }
//         if(threeSum < 0) {
//             left++
//         }
//         if(threeSum > 0) {
//             right--;
//         }
//     }
//     return res;
// };

function threeNumSum(nums) {
    nums.sort((a,b) => a - b);
    const len = nums.length;
    let i = 0, left = i + 1, right = len - 1 ;
    let res = [];
    for( i = 0; i < len -1; i++ ) {
        while(left < right) {
            let threeSum = nums[i] + nums[left] + nums[right];
            if(threeSum === 0) {
                res.push([nums[i],nums[left],nums[right]]);
            }
            if(threeSum < 0) {
                left++
            }
            if(threeSum > 0) {
                right--;
            }
        }
    }

    return res;
};
// console.log('threeNumSum', );
console.log(threeNumSum([-1,0,1,2,-1,-4]));