"use strict"

const expect = require('chai').expect;
const getResults = require('../../js/getResults.js')
const path = require('path');

const testList = path.join(__dirname, '../test_resultsList.txt');
const testFolder = path.join(__dirname, '../test_results');

describe('**** getResults ****', function() {

	let line1 = 'sample1';
	let line2 = 'sample 2';

	let line1Text = 'SOME text i dunno';

	let fullGo = {
		name: 'yay so fun!',
		anagrams: ['jk', 'not anagrams at all', 'nopez', 'yay so fun!']
	}
	let lineCount;

	before( function() {
		return getResults.clear(testList)
		  .then( () => getResults.resetDirectory(testFolder) )
	});

	it('reads a file', function() {
		return getResults.fileToText(testList)
		  .then( data => {
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

	it('creates a file and can tell if it exists or not', function() {
		return getResults.doesFileExist(testFolder, line1 + '.txt')
		  .then( exists => {
		  	expect(exists).to.be.false;

		  	return getResults.makeFile(testFolder, line1 + '.txt', line1Text)
		  })
		  .then( () => getResults.doesFileExist(testFolder, line1 + '.txt') )
		  .then( exists => {
		  	expect(exists).to.be.true;

		  	let pathToContent = path.join(testFolder, line1 + '.txt');
		  	return getResults.fileToText(pathToContent)
		  })
		  .then( content => {
		  	expect(content).to.be.a('string');
		  	expect(content.length > 0).to.be.true;
		  })
	})

	it('clears a directory', function() {
		return getResults.resetDirectory(testFolder)
		  .then( () => getResults.doesFileExist(testFolder, line1 + '.txt') )
		  .then( exists => {
		  	expect(exists).to.be.false;
		  })
	})

	it('reads an array to a new text file', function() {
		let arr = ['hi hi', 'WHATS UP'];
		let target = 'test1.txt';

		return getResults.arrayToFile(testFolder, target, arr)
		  .then( () => getResults.fileToText(path.join(testFolder, target)) )
		  .then( text => {
		  	expect(text).to.be.a('string');
		  	expect(text).to.equal(arr.join('\n'));
		  })
	})

	it('stores anagrams', function() {
		return getResults.store(testList, testFolder, fullGo.name, fullGo.anagrams)
		  .then( () => getResults.alreadyAnagrammed(testList) )
		  .then( already => {
		  	expect(already).to.be.an('array');
		  	expect(already).to.have.length(3);

		  	return getResults.doesFileExist(testFolder, fullGo.name + '.txt')
		  })
		  .then( exists => {
		  	expect(exists).to.be.true;

		  	let filepath = path.join(testFolder, fullGo.name + '.txt');
		  	return getResults.fileToText(filepath)
		  })
		  .then( text => {
		  	expect(text).to.be.a('string');
		  	expect(text).to.equal(fullGo.anagrams.join('\n'));
		  })
	})

	it('does not add anything new if the thing already exists', function() {
		return getResults.store(testList, testFolder, fullGo.name, fullGo.anagrams)
		.then( () => getResults.alreadyAnagrammed(testList) )
		.then( already => {
			expect(already).to.be.an('array');
			expect(already).to.have.length(3);
		})
	})

})