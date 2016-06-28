const allAnagrams = require('./allAnagrams.js');
const isWord = require('./isWord.js');

function getValidAnagrams(phrase) {

	console.log('generating all anagrams for phrase', phrase, '...');
	let anagrams = allAnagrams(phrase);
	console.log('finished generating all anagrams for phrase', phrase);

	console.log('finding non-nonsense in anagrams...')
	return anagrams.map( anagram => anagram.split(' ').map( word => word.trim() ) )
	               .filter( wordsArray => wordsArray.reduce( (foundValid, current) => foundValid || isWord(current) ))
	               .map( wordsArray => wordsArray.join(' ') )

}
module.exports = getValidAnagrams;