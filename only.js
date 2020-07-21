//一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
//动态规划问题：三个要素 1. 动态方程  2.
// 每次跳的时候，小青蛙可以跳一个台阶，也可以跳两个台阶，也就是说，每次跳的时候，小青蛙有两种跳法。第一种跳法：第一次我跳了一个台阶，那么还剩下n-1个台阶还没跳，
// 剩下的n-1个台阶的跳法有f(n-1)种。第二种跳法：第一次跳了两个台阶，那么还剩下n-2个台阶还没，剩下的n-2个台阶的跳法有f(n-2)种。所以，小青蛙的全部跳法就是这两种跳法之和了，即 f(n) = f(n-1) + f(n-2);
function f1(n) {
	// 递归解法 性能很差
	if (n <= 2) return n;
	return f(n - 1) + f(n - 2);
}

function f2(n) {
	let dp = [1, 2];
	for (let i = 2; i < n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n - 1];
}

// 求斐波那契数列第n项
function fiber1(n) {
	if (n <= 2) return 1;
	return fiber(n - 1) + fiber(n - 2);
}
function fiber2(n) {
	let res = [1, 1];
	for (let i = 2; i < n; i++) {
		res[i] = res[i - 1] + res[i - 2];
		res.push(res[i]);
	}
	return res[n];
}

// 两个链表的第一个公共节点
function interscetNode(headA, headB) {}

function mapLinkedList(head) {
	let node = head;
	// while(node !== null) {
	//     console.log(node.val);
	//     node = node.next;
	// }
	// 倒序打印
	// let arr = [];
	// while(node !== null) {
	//     arr.push(node.val)
	//     node = node.next;
	// }
	// for(let i = arr.length-1; i >= 0; i--) {
	//     console.log(arr[i])
	// }

	// 倒序打印 递归写法
	if (node !== null) {
		if (node.next !== null) {
			// node = node.next;
			mapLinkedList(node.next);
		}
		console.log(node.val);
	}
}

function nodeList(val) {
	this.val = val;
	this.next = null;
}
let node1 = new nodeList(1);
let node2 = new nodeList(2);
node1.next = node2;

let node3 = new nodeList(3);
let node4 = new nodeList(4);
let node5 = new nodeList(5);
node2.next = node3;
node3.next = node4;
node4.next = node5;

mapLinkedList(node1);

// 递归 求n个数的和
function sum1(n) {
	if (n === 1) {
		return 1;
	} else {
		return sum1(n - 1) + n;
	}
}

function fact(n, r) {
	if (n <= 0) {
		return 1 * r;
	} else {
		return fact(n - 1, r * n);
	}
}

console.log(fact(5, 1));
// 尾递归

// 尾递归优化

// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型

// 数组去重 nlogn
function removeDup(arr) {
	arr.sort();
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] > arr[i]) {
			res.push(arr[i]);
		}
	}
	console.log("resssss", res);
	return res;
}

removeDup([1, 2, 2, 5, 2, 3, 1, 7, 8, 9, 5, 6]);

// 数组去重


(async (obj) => {
	if( k in Obj) {
		console.log('hello world')
	}
})()

