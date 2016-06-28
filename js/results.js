const getResults = require('./getResults.js');
const path = require('path');

const resultsFolder = path.join(__dirname, '../results');
const resultsList = path.join(__dirname, '../resultsList.txt');

const Results = {};
module.exports = Results;

Results.storeResult = (original, anagrams) => {
	return getResults.store(resultsList, resultsFolder, original, anagrams);
}