// var a = { name: '前端开发' }
// var b = a;
// a = null;

// // 这时b的值是多少

// var a = {n: 1};
// var b = a;
// a.x = a = {n: 2};

// a.x 	// 这时 a.x 的值是多少
// b.x 	// 这时 b.x 的值是多少

// function* helloWorldGenerator() {
// 	yield "hello";
// 	yield "world";
// 	return "ending";
// }

// var hw = helloWorldGenerator();

// console.log(hw.next()); // { value: 'hello', done: false }
// console.log(hw.next()); // { value: 'world', done: false }
// console.log(hw.next()); // { value: 'ending', done: true }
// console.log(hw.next()); // { value: undefined, done: true }

// new Promise((r) => {
//     r();
// })
// .then(() => console.log(1))
// .then(() => console.log(2))
// .then(() => console.log(3))

// new Promise((r) => {
//     r();
// })
// .then(() => console.log(4))
// .then(() => console.log(5))
// .then(() => console.log(6))

// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }

// async function async2() {
//     console.log('async2')
// }

// async1();

// new Promise((resolve) => {
//     console.log(1)
//     resolve()
// }).then(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// }).then(() => {
//     console.log(4)
// })


async function async1() {
	await async2();
	console.log("async1 end");
}
async function async2() {
	console.log("async2 end");
}
async1();

new Promise((resolve) => {
	console.log("Promise");
	resolve();
})
	.then(function () {
		console.log("promise1");
	})
	.then(function () {
		console.log("promise2");
	});

// async2 end
// Promise
// async1 end
// promise1
// promise2

async function async1() {
	await async2();
	console.log("async1 end");
}
async function async2() {
	console.log("async2 end");
	return Promise.resolve().then(() => {
		console.log("async2 end1");
	});
}
async1();
new Promise((resolve) => {
	console.log("Promise");
	resolve();
})
	.then(function () {
		console.log("promise1");
	})
	.then(function () {
		console.log("promise2");
	});

// async2 end
// async1 end
// Promise
// async2 end1
// promise1
// promise2



// 作用域问题



