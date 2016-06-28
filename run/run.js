"use strict"

const prompt = require('prompt');
const calculateAnagrams = require('../js/calculateAnagrams.js');
const Results = require('../js/results.js');

let phrase;
let onlyEnglish = false;

prompt.start();
console.log('Welcome to the anagram generator!');

// console.log('You are about to be prompted for two things: a phrase and whether you want to receive all possible anagrams or only those containing at least one valid english word');
console.log('When prompted, please enter the phrase you wish to see anagrams for')
console.log('You can enter any phrase, but we will scrub newlines (\\n) out so all our code doesn\'t break');
// console.log('When asked if you want only the english words, please enter either true or false');
// console.log('Otherwise, the answer to this question will default to true and your output will exclude everything that looks like gibberish to the program');

prompt.get(['phrase'], function(err, res) {
	phrase = res.phrase.split('\n')
	                    .map( word => word.trim() )
	                    .join('');

	// let onlyEnglish = res.onlyEnglish.toLowerCase() === 'true' ? true : false;

})

console.log('Please wait while we calculate all anagrams... this can take a while :(');
let anagrams = calculateAnagrams(phrase);

console.log('All anagrams successfull generated - please stand by while we output them');
return Results.storeResult(phrase, anagrams, onlyEnglish)
  .then( () => {
  	console.log('Success! Please see the results folder for a list of your anagrams');
  })