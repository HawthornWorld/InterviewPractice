

// 题目一：
// 请完成“空白处”代码，使得以下组件在选择时能够将合适的值打印出来
class Counter extends React.Component {
	select(val) {
		console.log('you have select' + val);
	}
	render() {
		return (<ul>
           { 
               ['a','b','c'].map((item, index) => {
                   return <li onClick={this.select.bind(this,item)}>{item}</li>
               })
           }
       </ul>)
	}
}


// 题目二：
// 请实现find函数，使下列的代码调用正确。
// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
	{userId: 8, title: 'title1'},
	{userId: 11, title: 'other'},
	{userId: 15, title: null},
	{userId: 19, title: 'title2'}
];

var find = function(origin) {
	//your code are here...
  return {
    where: function(obj) {
      const keys = Object.keys(obj);
      let res = [];
      keys.forEach(key => {
        let result = origin.filter(item => {
          return item[key].match(obj[key]);
        });
        res = res.concat(result);
      })
      return {
        orderBy: function(primaryKey, direction) {
          if(direction === 'desc') {
            res.sort((a,b) => a[primaryKey] < b[primaryKey]);
          } else {
            res.sort((a,b) => a[primaryKey] > b[primaryKey]);
          }
          return res;
        }
      }
    }
  }
  
}

//查找data中，符合条件的数据，并进行排序
var result = find(data).where({
	"title": /\d$/
}).orderBy('userId', 'desc');

console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];




// 题目三：
// 下面是一个redux中间件，补充“空白处”代码，使得dispatch支持action为函数作为返回值
  export default function() {
    return ({ dispatch, getState }) => next => action => {
      if (typeof action === 'Function') {
        return action(dispatch, getState);
      }
      return next(action);
    };
  };



// 题目四：
// 为 Function 扩展一个通用的方法 bindX，可以实现如下功能
  function add(num1, num2) {
      return this.value + num1 + num2;
  }

  var data = {
      value: 1
  };

  var addEx = add.bindX(data, 2);

  addEx(3);    // 6

  Function.prototype.bindX = function(...args) {
    const obj = args[0];
    const fn = this;
    return function(...params) {
      return fn.call(obj, args.slice(1), params)
    }
  }






// 题目五：
// 有一个数组，里面只存在 * 和 字母，比如 [‘*’, ‘d’, ‘c’, ‘*’, ‘e’, ‘*’, ‘a’, ‘*‘]。
// 现在需要把这个数组中的所有星号移动到左边，所有的字母移动到右边，所有字母的顺序不能改变。
var arr = ['*', 'd', 'c', '*', 'e', '*', 'a', '*'];

 function parse(arr){
   	 if(!Array.isArray(arr)) return new TypeError('param must be an array');
   	 let len = arr.length, starCount = 0, res = [];
     for(let i = 0; i < len; i++) {
       	if(arr[i] === '*') {
          startCount++
        } else {
          res.push(arr[i])
        }
     }
   	  for(let j = 0; j < startCount; j++) {
        res.unshift('*')
      }
   return res;
 }

 console.log(parse(arr));


