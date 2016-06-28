"use strict"

const expect = require('chai').expect;
const getResults = require('../../js/getResults.js')
const path = require('path');

const testList = path.join(__dirname, '../test_resultsList.txt');

describe('**** getResults ****', function() {

	let line1 = 'sample1';
	let line2 = 'sample 2';

	before( function() {
		return getResults.clear(testList);
	});

	// xit('writes data to a file', function() {
	// 	let txt = '\nblah blah blah!';

	// 	// return 
	// })

	it('reads a file', function() {
		return getResults.fileToText(testList)
		  .then( data => {
		  	console.log('read data', data);
		  	expect(data).to.be.a('string');
		  })
	})

	it('deletes the data in a file', function() {
		return getResults.clear(testList)
		  .then( () => getResults.fileToText(testList) )
		  .then( data => {
		  	expect(data).to.be.a('string');
		  	expect(data).to.have.length(0);
		  })
	})

	it('writes to a file', function() {
		return getResults.addTextToFile(testList, line1)
		  .then( () => getResults.fileToText(testList) )
		  .then( text => {
		  	expect(text).to.be.a('string');
		  	expect(text.length > 0).to.be.true;
		  })
	})

	it('appends anagrams to the list', function() {
		return getResults.clear(testList)
		  .then( () => getResults.addToList(testList, line1) )
		  .then( () => getResults.addToList(testList, line2) )
		  .then( () => getResults.fileToText(testList) )
		  .then( text => {
		  	console.log('got text', text);
		  	expect(text).to.be.a('string');
		  	expect(text.length > 0).to.be.true;
		  	expect(text.indexOf('\n') > -1).to.be.true;
		  })
	})


	it('gets an array of anagrams looked up', function() {
		return getResults.alreadyAnagrammed(testList)
		  .then( already => {
		  	expect(already).to.be.an('array');
		  	expect(already).to.have.length(2);
		  })
	})

	it('checks if an anagram is part of the list', function() {
		return getResults.textInList(testList, line1)
		  .then( result => {
		  	expect(result).to.be.true;

		  	return getResults.textInList(testList, 'not in list!')
		  })
		  .then( result => {
		  	expect(result).to.be.false;
		  })
	})

	it('does not add an anagram to the list of it is already there', function() {
		let originalLength;

		return getResults.alreadyAnagrammed(testList)
		  .then( list => {
		  	originalLength = list.length;

		  	return getResults.addToList(testList, line1)
		  })
		  .then( () => getResults.alreadyAnagrammed(testList) )
		  .then( list => {
		  	expect(list).to.be.an('array');
		  	expect(list.length).to.equal(originalLength);
		  })
	})

	xit('adds an anagram to the list already looked up', function() {
		expect(false).to.be.true;
	})

	xit('reads an array to a new text file', function() {
		expect(false).to.be.true;
	})
})