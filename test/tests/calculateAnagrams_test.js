"use strict"

const expect = require('chai').expect;
const testhelper = require('../testhelper.js');
const calculateAnagrams = require('../../js/calculateAnagrams');

describe('**** calculateAnagrams ****', function() {

	it('gets ALL the anagrams', function() {
		let input1 = 'a';
		let expectedOutput1 = ["a"];
		let anagrams1 = calculateAnagrams(input1, false);
		expect(anagrams1).to.be.an('array');
		expect(testhelper.compareArrays(anagrams1, expectedOutput1)).to.be.true;

		let input2 = 'ab';
		let expectedOutput2 = ["ab","ba"];
		let anagrams2 = calculateAnagrams(input2, false);
		expect(anagrams2).to.be.an('array');
		expect(testhelper.compareArrays(anagrams2, expectedOutput2)).to.be.true;

		let input3 = 'abc';
		let expectedOutput3 = ["abc","acb","bac","bca","cab","cba"];
		let anagrams3 = calculateAnagrams(input3, false);
		expect(anagrams3).to.be.an('array');
		expect(testhelper.compareArrays(anagrams3, expectedOutput3)).to.be.true;

		let input4 = "apps";
		let expectedOutput4 = ["apps","apsp","aspp","paps","pasp","ppas","ppsa","psap","pspa","sapp","spap","sppa"];
		let anagrams4 = calculateAnagrams(input4, false);
		expect(anagrams4).to.be.an('array');
		expect(testhelper.compareArrays(anagrams4, expectedOutput4)).to.be.true;
	})

	xit('gets ONLY valid anagrams', function() {
		let input1 = 'a';
		let expectedOutput1 = ["a"];
		let anagrams1 = calculateAnagrams(input1, true);
		console.log('actual anagrams1', anagrams1);
		expect(anagrams1).to.be.an('array');
		expect(testhelper.compareArrays(anagrams1, expectedOutput1)).to.be.true;

		let input2 = 'ab';
		let expectedOutput2 = ["ab","ba"];
		let anagrams2 = calculateAnagrams(input2, true);
		console.log('actual anagrams2', anagrams2);
		expect(anagrams2).to.be.an('array');
		expect(testhelper.compareArrays(anagrams2, expectedOutput2)).to.be.true;

		let input3 = 'abc';
		let expectedOutput3 = ["abc","acb","bac","bca","cab","cba"];
		let anagrams3 = calculateAnagrams(input3, true);
		console.log('actual anagrams3', anagrams3);
		expect(anagrams3).to.be.an('array');
		expect(testhelper.compareArrays(anagrams3, expectedOutput3)).to.be.true;

		let input4 = "apps";
		let expectedOutput4 = ["apps","apsp","aspp","paps","pasp","ppas","ppsa","psap","pspa","sapp","spap","sppa"];
		let anagrams4 = calculateAnagrams(input4, true);
		console.log('actual anagrams4', anagrams4);
		expect(anagrams4).to.be.an('array');
		expect(testhelper.compareArrays(anagrams4, expectedOutput4)).to.be.true;
	})
})