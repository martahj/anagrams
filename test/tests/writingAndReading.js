const expect = require('chai').expect;
const getResults = require('../../js/getResults.js')
const path = require('path');

const testList = path.join(__dirname, '../test_resultsList.txt');

describe('**** write and reading ****', function() {

	it('reads a file', function() {
		return getResults.fileToText(testList)
		  .then( data => {
		  	console.log('read data', data);
		  	expect(data).to.be.a('string');
		  })
	})

	it('returns with a list of anagrams already looked up', function() {
		return getResults.alreadyAnagrammed(testList)
		  .then( already => {
		  	console.log('already!', already);
		  	expect(already).to.be.an('array');
		  	expect(already).to.have.length(2);
		  })
	})

	xit('adds an anagram to the list already looked up', function() {
		expect(false).to.be.true;
	})

	xit('reads an array to a new text file', function() {
		expect(false).to.be.true;
	})
})