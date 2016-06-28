"use strict"

const allAnagrams = require('./allAnagrams.js');
const checkWords = require('./checkWords.js');

function calculateAnagrams(phrase, onlyEnglish) {
	let anagrams = allAnagrams(phrase)
	let trimmedAnagrams = anagrams.map( words => words.split(' ').map( word => word.trim() ) );

	let cleanedAnagrams = trimmedAnagrams.map( wordsArray => wordsArray.join(' ') );

	// if (onlyEnglish) {
	// 	console.log('just a bit longer... we\'re getting rid of nonsense for you :)');
	// 	cleanedAnagrams = trimmedAnagrams.filter( wordsArray => wordsArray.reduce( (foundValid, current) => foundValid || isWord(current) ))
	//                                      .map( wordsArray => wordsArray.join(' ') )
	// } else {
	// 	cleanedAnagrams = trimmedAnagrams.map( wordsArray => wordsArray.join(' ') );
	// }

	return cleanedAnagrams;
}
module.exports = calculateAnagrams;