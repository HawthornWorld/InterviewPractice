Array.prototype.myReduce = function (fn, initialVal) {
	let arr = this;
	if (!Array.isArray(arr)) throw new TypeError("Array must be an array");
	if (arr === []) throw new Error("Array can not be empty");
	let acc = arr[0],
		startIdx = 0;
	if (initialVal !== undefined) {
		acc = initialVal;
		// startIdx = 1;
	}
	for (let i = startIdx; i < arr.length; i++) {
		// 回调函数返回累计值
		acc = fn(acc, arr[i], i, arr);
	}
	return acc;
};

console.log('reduce!!!!!!!!',[1,2,3].myReduce(function(a,b){
  return a+b
}, 10))