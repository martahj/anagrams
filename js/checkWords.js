"use strict"

// const wordlist = require('wordlist-english');
// const americanWords = wordlist.american;
// const britishWords = wordlist.british;
// const wordpos = require('wordpos');

const checkWords = {};
module.exports = checkWords;

checkWords.isWord = (word) => {
	let idx = americanWords.indexOf(word);
	console.log('index of ', word, idx);
	return (americanWords.indexOf(word) > -1) || (britishWords.indexOf(word) > -1);
}

checkWords.tagWords = (phrase) => {
	// console.log('phrase', phrase);
	let words = TAGGER.tag(new POS.Lexer().lex(phrase))
	return words;
	// console.log('wordPOs', wordpos);
	// console.log('wordpos.getPOS', wordpos.getPOS);
	// return new Promise( (resolve, reject) => {
	// 	wordpos.getPOS(phrase, function(result) {
	// 		resolve(phrase);
	// 	})
	// })
}