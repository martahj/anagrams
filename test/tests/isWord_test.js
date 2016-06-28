"use strict"

const expect = require('chai').expect;
const testhelper = require('../testhelper.js');
const checkWords = require('../../js/checkWords');

xdescribe("**** isWord ****", function() {

	it('identifies parts of speech', function() {
		let phrase = 'what is wrong with fijwo';

		let tagged = checkWords.tagWords(phrase);
		console.log('tagged', tagged);
		expect(false).to.be.true;
		// return checkWords.tagWords(phrase)
		//   .then( pos => {
		//   	console.log('pos', pos);
		//   	expect(false).to.be.true;
		//   })
	})

	xit('correctly identifies real words', function() {
		let hello = 'hello';
		expect(isWord(hello)).to.be.true;
	})

	xit('rejects nonsense', function() {
		let jipwap = 'jipwap';
		expect(isWord(jipwap)).to.be.false;
	})
})