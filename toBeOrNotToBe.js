/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
	const toBe = (val1) => {
		if (val === val1) {
			return true;
		} else {
			throw new Error('Not Equal');
		}
	};

	const notToBe = (val2) => {
		if (val !== val2) {
			return false;
		} else {
			throw new Error('Equal');
		}
	};

	return (obj = {
		toBe,
		notToBe,
	});
};


console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
