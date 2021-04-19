

### 1. 排序汇总


- 插入排序
```
  function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let pre = 0;
      while (pre < i) {
        arr[i] ^= arr[pre];
        arr[pre] ^= arr[i];
        arr[i] ^= arr[pre];
      }
      pre++;
    }
    console.log('arr',arr)
    return arr
  }
```







