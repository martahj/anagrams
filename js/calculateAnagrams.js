"use strict"

const allAnagrams = require('./allAnagrams.js');
const isWord = require('./isWord.js');

function calculateAnagrams(phrase, onlyEnglish) {

	console.log('generating all anagrams for phrase', phrase, '...');
	let anagrams = allAnagrams(phrase)
	let trimmedAnagrams = anagrams.map( words => words.split(' ').map( word => word.trim() ) );

	let cleanedAnagrams;
	if (onlyEnglish) {
		console.log('just a bit longer... we\'re getting rid of nonsense for you :)');
		cleanedAnagrams = trimmedAnagrams.filter( wordsArray => wordsArray.reduce( (foundValid, current) => foundValid || isWord(current) ))
	                                     .map( wordsArray => wordsArray.join(' ') )
	} else {
		cleanedAnagrams = anagrams.map( wordsArray => wordsArray.join(' ') );
	}
	console.log('finished generating all anagrams for phrase', phrase);
	return cleanedAnagrams;
}
module.exports = calculateAnagrams;