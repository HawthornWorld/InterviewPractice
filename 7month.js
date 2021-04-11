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
 */
var maxDepth = function (root) {
	if (root == null) return 0;
	let queue = [];
	queue.push(root);
	let deep = 0;
	while (queue.length > 0) {
		let size = queue.length;
		while (size > 0) {
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
