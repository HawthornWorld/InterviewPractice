// /**
//  *
//  * @param {*} total
//  * @param {*} weightArr
//  * @param {*} fetchOrderArr
//  */
// function maxWeight(total, weightArr, fetchOrderArr) {

// }

//  /^[a-zA-Z]([0-9a-zA-Z]+$)(?![a-zA-Z]+$)/
//
// function test(userName) {
// 	const reg1 = /^[a-zA-Z](.*)[0-9]+(.*)/;
// 	const reg2 = /^[a-zA-Z]([0-9a-zA-Z]+$)(?![a-zA-Z]+$)/;
// 	if (reg1.test(userName) && reg2.test(userName)) {
// 		console.log("Accept");
// 	} else {
// 		console.log("Wrong");
// 	}
// }

// test("Hhhh666");

// // 解构赋值改名字
// const obj = { a: 1, b: 2 };
// const { a: c } = obj;
// console.log(c); // 1


// 需要注意的是，立即resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行执行，不是马上执行,也不是在下一轮“事件循环”的开始时执行
// 原因：传递到 then() 中的函数被置入了一个微任务队列，而不是立即执行，这意味着它是在 JavaScript 事件队列的所有运行时结束了，事件队列被清空之后，才开始执行
Promise.resolve().then(()=>{
    console.log(0);
    setTimeout(()=> {
        console.log(4.5)
    })
    return Promise.resolve(4);// return 4
}).then((res)=>{
    console.log(res)
});

Promise.resolve().then(()=>{
    console.log(1);
}).then(()=>{
    console.log(2);
}).then(()=>{
    console.log(3);
}).then(()=>{
    console.log(5);
}).then(()=>{
    console.log(6);
});
	