
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


// 层序遍历 每一层节点分别入栈， 每次拿出来一个。
function levelorder() {
  if(root === null) return [];
  let queue = [];
  queue.push(root);
  while(queue.length > 0) {
    let tmp = queue.shift();
    console.log(tmp.val)
    if(tmp.left !== null) queue.push(tmp.left);
    if(tmp.right !== null) queue.push(tmp.right);
  }
}

function levelorder(root) {
  if(root === null) return [];
  let queue = [];
  queue.push(root);
  let res = [];
  while(queue.length > 0) {
    let size = queue.length;
    let levelValues = [];
    while(size > 0) {
      size--;
      let tmp = queue.shift();
      levelValues.push(tmp.val);
      if(tmp.left !== null) queue.push(tmp.left);
      if(tmp.right !== null) queue.push(tmp.right);
    }
    res.push(levelValues)
  }
  console.log(res.length);
  return res.length;
}

function TreeNode(val) {
  this.left = null;
  this.right = null;
  this.val = val;
}

// levelorder(node1)


var lowestCommonAncestor = function(root, p, q) {
  if(root === null) return root;
  if(root.val > p.val && root.val < q.val) return root;
  if(root.val === p.val || root.val === q.val) return root;
  if(root.val > p.val && root.val > q.val) {
      lowestCommonAncestor(root.left, p, q);
  } 
  if(root.val < p.val && root.val < q.val) {
      lowestCommonAncestor(root.right, p, q);
  } 
};


let node1 = new TreeNode(6);
let node2 = new TreeNode(2);
let node3 = new TreeNode(8);
let node4 = new TreeNode(4);
let node5 = new TreeNode(7);
let node6 = new TreeNode(9);
let node7 = new TreeNode(3);
let node8 = new TreeNode(5);

node1.left = node2;
node1.right = node3;
node2.right = node4;
node4.left = node7;
node4.right = node8;
node3.left = node5;
node3.right = node6;
console.log(lowestCommonAncestor(node1,2,8))

function B() {
  return 2;
}
function A(){
 return  B()
}
console.log(A())