"use strict"

const prompt = require('prompt');



prompt.start();
console.log('Welcome to the anagram generator!');

console.log('You are about to be prompted for two things: a phrase and whether you want to receive all possible anagrams or only those containing at least one valid english word');
console.log('You can enter any phrase, but we will scrub newlines (\\n) out so all our code doesn\'t break');
console.log('When asked if you want only the english words, please enter either true or false');
console.log('Otherwise, the answer to this question will default to true and your output will exclude everything that looks like gibberish to the program');

prompt.get(['phrase', 'onlyEnglish'], function(err, res) {
	let phrase = res.phrase.split('\n')
	                       .map( word => word.trim() )
	                       .join('');

	let onlyEnglish = res.onlyEnglish.toLowerCase() === 'true' ? true : false;

	console.log('Please wait while we calculate anagrams... this can take a while :(');
})