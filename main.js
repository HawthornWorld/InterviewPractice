


// 📁 main.js
// import User from './user.js'; // not {User}, just User

// new User('John');


// function revertNumberToFive(num) {
//     num = num.toString().split('').reverse().join('');
//     num = parseInt((~~num)).toString(5);
//     console.log(num);
// }
// revertNumberToFive(77267)


let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // 拦截写入操作
    if (typeof val == 'number') {
      target[prop] = val;
    //   console.log('set')
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // 添加成功
numbers.push(2); // 添加成功


// arr = arr.map(item => {
//     item = '111'
//     return item
// })

// let arr = [];
// arr.length = 5;
// arr.fill(true);
// console.log('arr',arr)


// let arr = [1,2,"1",[1]]


// 场景1
async function fn1() {
  console.log('1')
  await fn2();   // 这里加了await之后是13542
  console.log('2')
}

async function fn2() {
  console.log('3')
  await fn3();
  console.log('4')
}

function fn3() {
  console.log('5')
  return 1
}

fn1()


// 场景2
async function fn1() {
  console.log('1')
  fn2();   // 这里如果不加await 13524
  console.log('2')
}

async function fn2() {
  console.log('3')
  await fn3();
  console.log('4')
}

function fn3() {
  console.log('5')
  return 1
}

fn1()

