// promise串行（即让promise顺序执行）
function execute(tasks) {
	let resultList = [];
	return tasks
		.reduce(
			(previousPromise, currentPromise) =>
				previousPromise.then((resultList) => {
					return new Promise((resolve) => {
						currentPromise()
							.then((result) => {
								resultList.push(result);
								resolve();
							})
							.catch(() => {
								resultList.push(null);
								resolve(resultList.concat(null));
							});
					});
				}),
			Promise.resolve()
		)
		.then(() => resultList);
}

function execute(tasks) {
	return tasks.reduce(
		(previousPromise, currentPromise) =>
			previousPromise.then((resultList) => {
				return new Promise((resolve) => {
					currentPromise()
						.then((result) => {
							resolve(resultList.concat(result));
						})
						.catch(() => {
							resolve(resultList.concat(null));
						});
				});
			}),
		Promise.resolve([])
	);
}

const execute = async (tasks = []) => {
	const resultList = [];
	for (task of tasks) {
		try {
			resultList.push(await task());
		} catch (e) {
			resultList.push(null);
		}
	}
	return resultList;
};




// promise实现要素

// 最大并发k
function concurrentKey(urls, k) {
	let len = urls.length;
	let size = 0;
	if (len === 0) return;
	if (len > k) {
		size = k;
	}
	while (size > 0 && urls.length > 0) {
		let url = urls.shift();
		new Promise((resolve, reject) => {
			// ...loadimg
		}).then(()=> {
            size--;
            if(size === 0) {
                size = k
            }
        }).catch(()=> {
            size--;
            if(size === 0) {
                size = k
            }
        });
	}
	return;
}


// 找到数组中的最大值及优化方法


