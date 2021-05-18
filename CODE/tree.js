// 练习题目

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 前序递归
 */
function maxDepth(root) {
	return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 * 中序递归
 */
function maxDepth(root) {
	return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 前序非递归
 */
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
			// if (tmp.left != null || tmp.right != null) {
			//     deep++
			// }
		}
		deep++;
	}
	return deep;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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


/**
 * 最短路径
 */




    // 两个数组 排列组合 生成一个新的数组
    // arr1 = [{a: 1, b:2},...] arr2 = [{c: 3, d:4},...] >> res = [{a: 1, c:3},{a:1, d:4},{b: 2, c:3}, {b:2, d:4},...]
	function test(arr1, arr2) {
		const res = [];
		for(const [k1, v1] of Object.entries(arr1)) {
			for(const [k2, v2] of Object.entries(arr2)) {
				res.push({k1:v1, k2: v2})
			}
		}
		return res;
	}
	const arr1 = [{a: 1, b:2}];
	const arr2 = [{c: 3, d:4}];
	console.log('000000',test(arr1, arr2));



	function merge(arr1, arr2){
		let res = []
		for (let i=0;i<arr1.length;i++){
			let obj = arr1[i]
			let keys = Object.keys(obj)
			for (let j=0;j<keys.length;j++){
				for (let m=0;m<arr2.length;m++){
					let obj_2 = arr2[m]
					let keys_2 = Object.keys(obj_2)
					for (let n=0;n<keys_2.length;n++){
						let tmp_obj = {}    
						tmp_obj[keys[j]] = obj[keys[j]]
						tmp_obj[keys_2[n]] = obj_2[keys_2[n]]
						res.push(tmp_obj)
					}
				}
			}
		}
		return res
	}


	let flatter = (a1, a2) => {
		let temp = a1.reduce((sum1, item1) => {
		
			let temp = a2.reduce((sum2, item2) => {
	
				let temp = []
				for (let i in item1) {
					for (let j in item2) {
						temp.push({[i]: item1[i], [j]: item2[j]})
					}
				}
				return [...sum2, ...temp]
			}, [])
			return [...sum1, ...temp]
		}, [])
		return temp;
	}

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

	function TreeNode(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}

	let root = new TreeNode(5);
	let n1 = new TreeNode(3);
	let n2 = new TreeNode(6);

	root.left = n1;
	root.right = n2;

	let n3 = new TreeNode(2);
	let n4 = new TreeNode(4);
	n1.left = n3;
	n1.right = n4;

	let n5 = new TreeNode(1);
	n3.left = n5;

	let arr = [23,45,83,96,121,11,9,2,37];

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


