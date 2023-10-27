/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	let inn = init;
	const increment = () => {
		return ++init;
	};
	const decrement = () => {
		return --init;
	};
	const reset = () => {
		init = inn;
		return init;
	};

	return (obj = {
		increment,
		decrement,
		reset,
	});
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 4
console.log(counter.reset()); // 5

// const counter = createCounter(0);
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// console.log(counter.reset()); // 0
// console.log(counter.reset()); // 0