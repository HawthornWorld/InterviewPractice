
// /**
//  * @param {string} S
//  * @return {string[]}
//  */
// var permutation = function(S) {

// };


// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
//  var pathSum = function(root, sum) {
//     if (root === null) return [];
//     const res = [];
//     const DFS = (root, sum, tmp) => {
//       if (root.val === sum && !root.left && !root.right) {
//           res.push(tmp);
//       }
//       tmp.push(root.val);
//       if (root.left) DFS(root.left, sum - root.val, tmp.slice());
//       if (root.right) DFS(root.right, sum - root.val, tmp.slice());
//     }
//     DFS(root, sum, []);
//     return res;
//   };

// /**
//  * @param {TreeNode} root
//  * @param {number} target
//  * @return {number[][]}
//  */
//  var pathSum = function(root, sum) {
//     if (root === null) return [];
//     const res = [], path = [];
//     var DFS = (root, sum) => {
//         if(root == null) return;
//         path.push(root.val);
//         sum -= root.val;
//         if(sum == 0 && root.left == null && root.right == null) {
//             res.push(path);
//         }
//         DFS(root.left, sum);
//         DFS(root.right, sum);
//         path.pop();
//     }
//     DFS(root, sum)
//     return res;
//   };


// // 层序遍历 每一层节点分别入栈， 每次拿出来一个。
// function levelorder() {
//   if(root === null) return [];
//   let queue = [];
//   queue.push(root);
//   while(queue.length > 0) {
//     let tmp = queue.shift();
//     console.log(tmp.val)
//     if(tmp.left !== null) queue.push(tmp.left);
//     if(tmp.right !== null) queue.push(tmp.right);
//   }
// }

// function levelorder(root) {
//   if(root === null) return [];
//   let queue = [];
//   queue.push(root);
//   let res = [];
//   while(queue.length > 0) {
//     let size = queue.length;
//     let levelValues = [];
//     while(size > 0) {
//       size--;
//       let tmp = queue.shift();
//       levelValues.push(tmp.val);
//       if(tmp.left !== null) queue.push(tmp.left);
//       if(tmp.right !== null) queue.push(tmp.right);
//     }
//     res.push(levelValues)
//   }
//   console.log(res.length);
//   return res.length;
// }

// function TreeNode(val) {
//   this.left = null;
//   this.right = null;
//   this.val = val;
// }

// // levelorder(node1)


// var lowestCommonAncestor = function(root, p, q) {
//   if(root === null) return root;
//   if(root.val > p.val && root.val < q.val) return root;
//   if(root.val === p.val || root.val === q.val) return root;
//   if(root.val > p.val && root.val > q.val) {
//       lowestCommonAncestor(root.left, p, q);
//   } 
//   if(root.val < p.val && root.val < q.val) {
//       lowestCommonAncestor(root.right, p, q);
//   } 
// };


// let node1 = new TreeNode(6);
// let node2 = new TreeNode(2);
// let node3 = new TreeNode(8);
// let node4 = new TreeNode(4);
// let node5 = new TreeNode(7);
// let node6 = new TreeNode(9);
// let node7 = new TreeNode(3);
// let node8 = new TreeNode(5);

// node1.left = node2;
// node1.right = node3;
// node2.right = node4;
// node4.left = node7;
// node4.right = node8;
// node3.left = node5;
// node3.right = node6;
// console.log(lowestCommonAncestor(node1,2,8))

// function B() {
//   return 2;
// }
// function A(){
//  return  B()
// }
// console.log(A())

// var result = [];
// function flatten(arr,result = []) {
//   arr.forEach(item => {
//     if(Array.isArray(item)) {
//       flatten(item,result);
//     } else {
//       result.push(item);
//     }
//   })
//   return result;
// }

// function flatten(arr) {
//   let result = [];
//   arr.forEach(item => {
//     if(Array.isArray(item)) {
//       result = result.concat(flatten(item));
//     } else {
//       result.push(item);
//     }
//   })
//   return result;
// }

// function flatten(arr) {
//   // return arr.join('').split(',').join('').split('').map(item => Number(item)
//   // return arr.toString().split(',').map(item => Number(item)
//   return arr.join(',').split(',').map(item => Number(item))
// }

// function flatten(arr) {
//   while(arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//     console.log(arr);
//   }
//   return arr;
// }

// reduce写法
// function flatten(arr) {
//   return arr.reduce((acc,item) => {
//     acc = Array.isArray(item) ? acc.concat(flatten(item)) : acc.concat(item); 
//     return acc;
//   }, [])
// }
// console.log(flatten([1,[2,3],[4,[5,6]]]));

// console.log('3',[].concat(...[1,[2,3],[4,[5,6]]]))
// console.log('4',[...[1,[2,3],[4,[5,6]]]])


/**
 * @param {string} s
 * @return {string[]}
 */
 var permutation = function (s) {
  // dfs问题，先排序
  let str = [];//深度遍历每次撞南墙的结果
  let res = [];//最终的结果
  let arr = s.split('');//转换成数组
  let flag = [];//标记是否用过
  let len = arr.length;
  //先不管重复的，遍历所有的可能
  let dfs = (u) => {
      if (u === len) {//说明遍历到头
          res.push(str.join(''));
          return;//跳出循环，回溯
      }

      //枚举字符串，看下个位置可能的值
      for (let i = 0; i < len; i++) {
          if (!flag[i]) {//没被用过
              str[u] = arr[i];
              flag[i] = 1//标记那个位置，表示用过了
              // 向下一层遍历
              dfs(u + 1);
              //回复现场
              flag[i] = 0;
          }
      }
  }

  dfs(0);//从0的位置开始
  return [...new Set(res)];//去重
};
// console.log(permutation('abc'));

var permute = function(nums) {
  let res = [];
  var DFS = (path) => {
      if(path.length === nums.length) {
          res.push([...path]);
          return;
      }
      for(let i = 0; i < nums.length; i++) {
          if(path.includes(nums[i])) {
              continue;
          }
          path.push(nums[i])
          console.log(path)
          DFS(path);
          path.pop()
      }
  }
  DFS([])
  return res;
};
// permute([1,2,3])





