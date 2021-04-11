// module.exports = function (num) {
// 	console.log(num);
// };


// 终止条件为left == right 所以返回start即可
// function findPeakElement(nums) {
//         let start = 0, end = nums.length - 1;
//         while(start!=end) {
//             let mid = (start + end) >>> 1;
//             if(nums[mid] < nums[mid + 1]) {
//                 start = mid + 1;
//             }else {
//                 end = mid;
//             }
//         }
//         return start;
// }
// console.log(findPeakElement([1,2,1,3,5,6,4]))


// 移动 盲盒交换：活动场次y，每场活动人数x，计算盲盒被交换的总次数
function change(y,x) {
    
}


// function a() {
//     for(let j=0; j < 4; j++) {
//         setTimeout(()=> {
//             console.log(j)
//         }, 1)
//     }
// }
// a() // 输出0123

function b() {
    for(var j=0; j < 4; j++) {
        // setTimeout(()=> {
            console.log(j)
        // }, 1)
    }
}
b() // 输出0123