/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	const arry = [];
	for (const i in arr) {
		arry.push(fn(arr[i], Number(i)));
	}
	return arry;
	// return arr.map(fn);
};
arr = [1,2,3], 
fn = function plusone(n) { return n + 1; }
console.log(map(arr, fn))

arr = [1,2,3], 
fn = function plusI(n, i) { return n + i; }
console.log(map(arr, fn))

arr = [10,20,30], 
fn = function constant() { return 42; }
console.log(map(arr, fn))