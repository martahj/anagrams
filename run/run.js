"use strict"

const prompt = require('prompt');
const Promise = require('bluebird');
const calculateAnagrams = require('../js/calculateAnagrams.js');
const Results = require('../js/results.js');

let phrase;

prompt.start();

console.log('Welcome to the anagram generator!');
console.log('When prompted, please enter the phrase you wish to see anagrams for')
console.log('You can enter any phrase, but we will scrub newlines (\\n) out so all our code doesn\'t break');

prompt.get(['phrase'], function(err, res) {
	phrase = res.phrase.split('\n')
	                    .map( word => word.trim() )
	                    .join('');


    console.log('Please wait while we calculate all anagrams... this can take a while :(');
    let anagrams = calculateAnagrams(phrase);

    return new Promise( (resolve, reject) => {
    	return Results.storeResult(phrase, anagrams)
    	.then( () => {resolve();})
    })
    .then( () => {
    	console.log('Success! Please see the results folder for a list of your anagrams');
    })

})

