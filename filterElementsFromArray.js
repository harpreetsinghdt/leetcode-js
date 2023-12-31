/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	// return filteredArr = arr.filter(fn);

	const filteredArr = [];
	for (const i in arr) {
		let fnr = fn(arr[i], Number(i));
		if (fnr) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
};

(arr = [0, 10, 20, 30]),
	(fn = function greaterThan10(n) {
		return n > 10;
	});
console.log(filter(arr, fn));

(arr = [1, 2, 3]),
	(fn = function firstIndex(n, i) {
		return i === 0;
	});
console.log(filter(arr, fn));

(arr = [-2, -1, 0, 1, 2]),
	(fn = function plusOne(n) {
		return n + 1;
	});
console.log(filter(arr, fn));
