"use strict"

const testhelper = {};
module.exports = testhelper;

testhelper.compareArrays = (a, b) => {
	return a.length === a.length && allMatch(a, b);

	function allMatch(a, b) {
		return a.reduce( (bool, curr, idx) => bool && (curr === b[idx]), true);
	}
}