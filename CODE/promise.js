// class MyPromise {
//     constructor(executor) {
//       this.executor = executor;
//       this.value = null;
//       this.status = "pending";
//       this.callbacks = [];
//       const resolve = value => {
//         if (this.status === "pending") {
//           this.value = value;
//           this.status = "fulfilled";
//         }
//       };
//       const reject = value => {
//         if (this.status === "pending") {
//           this.value = value;
//           this.status = "rejected";
//         }
//       };
  
//       this.executor = executor(resolve, reject);
//     }
  
//     then(onFulfilled, onRejected) {
//       if (this.status === "pending") {
//         return new MyPromise((resolve, reject) => {
//           this.callbacks.push(() => {
//             resolve(onFulfilled(this.value));
//           });
//         });
//       }
//       if (this.status === "fulfilled") {
//         return new Promise((resolve, reject) => {
//           resolve(onFulfilled(this.value));
//         });
//       }
//       if (this.status === "rejected") {
//         return new Promise((resolve, reject) => {
//           resolve(onRejected(this.value));
//         });
//       }
//     }
//   }


  // promise.all .race .final



/**
 * 实现promise
 * https://imweb.io/topic/5bbc264b6477d81e668cc930
 */ 
// function Promise(fn) {
//     let self = this
//     self.status = 'pending';
//     self.data = undefined;
//     self.onFulfilledCallback = [];
//     self.onRejectedCallback = [];

//     function resolve(val) {
//         if(self.status === 'pending') {
//             self.status = 'resolved'
//             self.data = val;
//             setTimeout(() => {
//                 for(let i = 0; i < self.onFulfilledCallback.length; i++) {
//                     self.onFulfilledCallback[i](value);
//                 }
//             })
//         }
//     }

//     function reject(reason) {
//         if(self.status === 'pending') {
//             self.status = 'rejected';
//             self.data = reason;
//             setTimeout(() => {
//                 for(let i = 0; i < onRejectedCallback.length; i++) {
//                     self.onRejectedCallback[i](reason);
//                 }
//             })
//         }
//     }

//     try {
//         fn(resolve, reject);
//     } catch(e) {
//         reject(e);
//     }
// }

// Promise.prototype.then = function(onFulfilled, onRejected) {
//         let self = this;
//         onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(v) { return v};
//         onRejected = typeof onRejected === 'function' ? onRejected : function(r) { return r};

//         if(self.status === 'resolved') {
//             return new Promise(function(resolve, reject) {
//                 // 这里的setTimeout需要吗
//                 setTimeout( () => {
//                     try {
//                         let ret = onFulfilled(self.data);
//                         if(ret instanceof Promise) {
//                             ret.then(resolve, reject);
//                         } else {
//                             resolve(ret);
//                         }
//                     } catch(e) {
//                         reject(e)
//                     }
//                 })
//             })
//         }

//         if(self.status === 'rejected') {
//             return new Promise(function(resolve, reject) {
//                 setTimeout( () => {
//                     try {
//                         var ret = onRejected(self.data);
//                         if (ret instanceof Promise) {
//                             ret.then(resolve, reject);
//                         } else {
//                             reject(ret);
//                         }
//                     } catch (e) {
//                     reject(e);
//                     }
//                 });
//             });
//         }
        
//         if(self.status === 'penfing') {
//             return new Promise(function(resolve, reject) {
//                 self.onFulfilledCallback.push(function(value) {
//                 try {
//                     var ret = onFulfilled(self.data);
//                     if (ret instanceof Promise) {
//                     ret.then(resolve, reject);
//                     } else {
//                     resolve(ret);
//                     }
//                 } catch (e) {
//                     resolve(e);
//                 }
//                 });
        
//                 self.onRejectedCallback.push(function(value) {
//                 try {
//                     var ret = onRejected(self.data);
//                     if (ret instanceof Promise) {
//                     ret.then(resolve, reject);
//                     } else {
//                     reject(ret);
//                     }
//                 } catch (e) {
//                     reject(e);
//                 }
//                 });
//         })
//     }
// };

// // catch方法
// Promise.prototype.catch = function (onRejected) {
//     return this.then(null, onRejected);
// };


/**
 * promise串行
 * Promise串行是在上一个promise的then回调里去执行，再将本步骤的结果决议出去，所以很容易想到用Array.prototype.reduce()方法进行处理。
 * 需要注意的几点： 1. 无论每个Task是成功还是失败，它都不能阻断下一个Task的执行 2. 最后的then需要把每个Task的执行结果"决议"出去
 * https://zhuanlan.zhihu.com/p/90850451
 */

// 第一版
 function execute(tasks) {
    let resultList = [];
    return tasks.reduce(
    (previousPromise, currentPromise) => previousPromise.then((resultList) => {
        return new Promise(resolve => {
            currentPromise().then(result => {
                resultList.push(result);
                resolve()
            }).catch(() => {
                  resultList.push(null);
                  resolve(resultList.concat(null))
            })
        })
    }),
    Promise.resolve()
    ).then(() => resultList);
}

// 第二版
function execute(tasks) {
    return tasks.reduce(
    (previousPromise, currentPromise) => previousPromise.then((resultList) => {
        return new Promise(resolve => {
            currentPromise().then(result => {
                resolve(resultList.concat(result))
            }).catch(() => {
                resolve(resultList.concat(null))
            })
        })
    }),
    Promise.resolve([])
    )
}

// aysnc/await版本

const execute = async (tasks = []) => {
    const resultList = [];
    for(task of tasks) {
      try {
        resultList.push(await task());
      } catch (e) {
        resultList.push(null);
      }
    }
    return resultList;
  }


  /**
   * 一个合格的工程师： 能找到或写出市面上最主流的实现方式。一个出色的工程师： 能明白其中的原理，并能举一反三，有自己的思考。
   * https://www.manman.io/2019/03/21/promise_series/
   * 1.reduce实现 2.async await 3.for await of 4.普通循环 5.递归
   */

  // 递归
  function dispatch(i, p = Promise.resolve()) {
    if (!arr[i]) return Promise.resolve()
    return p.then(() => dispatch(i + 1, delay(arr[i])))
  }
  dispatch(0)
 
  


