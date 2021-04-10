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
