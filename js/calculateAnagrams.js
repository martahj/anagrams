"use strict"

const allAnagrams = require('./allAnagrams.js');

function calculateAnagrams(phrase, onlyEnglish) {

	return allAnagrams(phrase)
	       .map( words => words.split(' ').map( word => word.trim() ) )
	       .map( wordsArray => wordsArray.join(' ') )

}
module.exports = calculateAnagrams;