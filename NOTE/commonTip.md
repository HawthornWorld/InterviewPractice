- 边界判断，长度相等/长度不够 即可return减少函数执行次数
- str.split('') 用es6写法为：[...str]
- 数组原位交换的方法：1. 解构赋值 2.异或运算 又称为二进制不进位运算
- 一种给对象排序的方式：
```
    const sortItems = Object.keys(obj).sort((a,b) => {
        return obj[b] - obj[a];
    })
```
- Object.keys(map)不能用来遍历map对象

-  一般需要排序 note: sort在不传入回调函数时默认采用字典序排序 且负数在做绝对值越小越在左

- 时间复杂度：
O(n^2) 运行n*n次
运行了log2(n)次 每次x2 运行到n的时候 需要运行log2(n)

- 使用split join 时，array的','是没有空间占用的不用关心，string反之. split完得到的数组的每一项都是字符串，如果需要数字需要map一下转成数字 Number(item)

- 拓展运算符： 以下两个输出不一致，用...展开之后，放进[]和用concat维数不一样
    ```
    console.log('1',[].concat(...[1,2,[3,4]])) 
    console.log('2',[...[1,2,[3,4]]])
    ```
- [1,2,3].slice() 返回数组的一份拷贝
