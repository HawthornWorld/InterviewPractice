/**
 * 对象扁平化
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），
 * 返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null, 
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */
function flatten(input) {
    let isArr = Array.isArray(val);
    let isObj = Object.prototype.toString.call(val) !== "[object Object]");
    let res;
    
    let arrHelper = function(arr,res) {
      let len = arr.length;
      for(let i=0; i<len; i++) {
          if(isArr(arr[i])) {
            arrHelper(arr[i],res)
          } else {
            res.push(arr[i])
          }
      }
    }
    let objHelper = function(obj, res) {
      for(let k in obj){
        if(isArr(obj(k) || isObj(obj(k)) {
          res[k] = objHelper(obj[k], res);
        } else {
          res[k] = obj[k]
        }
      }
    }
                  
    if(isArr(input)){
      res = [];
      arrHelper(input, res);
      return res;
    } else if(isObj(input)) {
      res = {};
      objHelper(obj, res);
      return res;
    } else {
      throw new TypeError('Arguments type error');
    }
   
  }
  