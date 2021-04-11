边界判断，长度相等/长度不够 即可return减少函数执行次数
str.split('') 用es6写法为：[...str]
数组原位交换的方法：1. 解构赋值 2.异或运算 又称为二进制不进位运算
一种给对象排序的方式：
    const sortItems = Object.keys(obj).sort((a,b) => {
      return obj[b] - obj[a];
    })
Object.keys(map)不能用来遍历map对象

  一般需要排序 note: sort在不传入回调函数时默认采用字典序排序 且负数在做绝对值越小越在左

  快慢指针 链表反转 滑动窗口

  时间复杂度：
O(n^2) 运行n*n次
运行了log2(n)次
