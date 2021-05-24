
### 1. 定义

树 是一种经常用到的数据结构，用来模拟具有树状结构性质的数据集合。

二叉树 是一种更为典型的树状结构。如它名字所描述的那样，二叉树是每个节点最多有两个子树的树结构，通常子树被称作“左子树”和“右子树”

满二叉树：每一层都挂满节点的二叉树，一颗深度为h的树，有2^h-1 个节点

完全二叉树：除了最后一层，之前的都是满节点，最后一层从左到右依次排列，可以不排满

平衡二叉树：又叫avl树，两个子树的高度绝对值不超过1，并且左右子树都是平衡二叉树

（满二叉树一定是完全二叉树，完全二叉树不一定是满二叉树）

二叉搜索树：每一颗子树的左节点都小于根节点，右节点都大于根节点

### 2. 特点 逻辑上 物理上

每个节点都只有有限个子节点或无子节点；

没有父节点的节点称为根节点；

每一个非根节点有且只有一个父节点；

除了根节点外，每个子节点可以分为多个不相交的子树；

树里面没有环路。


### 3. 树的操作

 - 增 删 改 查

 - 搜索

 深度优先(DFS)： 前序中序后序遍历（递归/迭代实现：需要一个栈来帮助我们保存以前访问过的节点）

 广度优先(BFS)： 层序遍历 就是利用队列将同一层的节点保存起来然后访问，在访问的同时将下一层的节点也入队列。

 递归 树的结构天然适合递归，做题的时候如果要用递归，要分解到每个子树


### 4. 在js里的表示
```
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
```

二叉搜索树构造

```
function buildBST(arr) {
	let root = new TreeNode(arr[0]);
	for(let i = 1; i < arr.length; i++) {
		let tmp = arr[i];
		insertBST(root, tmp);
	}
	inorder(root);
}

function insertBST(root, val) {
	if (root === null) {
		return new TreeNode(val);
	}
	if (root.val > val) root.left = insertBST(root.left, val);
	if (root.val < val) root.right = insertBST(root.right, val);
	return root;
}

buildBST(arr)
```


### 5. 二叉树操作的实现

- 层序遍历

```
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
```

```
let preorder = function(node) {
	if(node === null) return node;
	console.log(node.val);
	preorder(node.left);
	preorder(node.right);
}

let inorder = function(node) {
	if(node === null) return node;
	inorder(node.left);
	console.log(node.val);
	inorder(node.right);
}
```


### 6. 二叉树常见题型

- 最大深度

```
function maxDepth(root) {
	return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
```

```
var maxDepth = function (root) {
	if (root == null) return 0;
	let queue = [];
	queue.push(root);
	let deep = 0;
	// 第一个循环 判断是否还有深度
	while (queue.length > 0) {
		let size = queue.length;
		// 第二个循环 判断是否还有广度
		while (size > 0) {
			// 队列：先进先出
			let tmp = queue.shift();
			size--;
			if (tmp.left != null) {
				queue.push(tmp.left);
			}
			if (tmp.right != null) {
				queue.push(tmp.right);
			}
		}
		deep++;
	}
	return deep;
};
```

```
function maxDepth(root) {
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
  return res.length;
}
```

- 是否平衡二叉树

```
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 */
var isBalanced = function (root) {
	if (root === null) return true;
	let left = maxDepth(root.left);
	let right = maxDepth(root.right);
	return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
```

- 二叉树中和为某一值的路径(DFS)

```
写法1: 递归不回溯--DFS传递path副本，res每次push传递的副本
var pathSum = function(root, sum) {
  if (root === null) return [];
  const res = [];
  const DFS = (root, sum, path) => {
	path.push(root.val);
	sum -= root.val;
    if (sum === 0 && !root.left && !root.right) {
        res.push(path);
    }
    if (root.left) DFS(root.left, sum, path.slice());
    if (root.right) DFS(root.right, sum, path.slice());
  }
  DFS(root, sum, []);
  return res;
};
```

```
写法2: 回溯--DFS不传递path，path唯一，res每次push副本
var pathSum = function(root, sum) {
	if (root === null) return [];
	const res = [], path = [];
	var DFS = (root, sum) => {
		path.push(root.val);
		sum -= root.val;
		if(sum == 0 && root.left == null && root.right == null) {
			res.push(path.slice()); // 要拷贝一份path，否则会被更改影响
		}
		if (root.left) DFS(root.left, sum);
		if (root.right) DFS(root.right, sum);
		path.pop(); // 向上回溯时，将当前节点从path中删除。想象一下递归的出栈顺序
	}
	DFS(root, sum)
	return res;
};
```

