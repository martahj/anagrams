"use strict"

const Promise = require('bluebird');
const path = require('path');
// const fs = Promise.promisifyAll(require('fs'));
const fs = require('fs');

const resultsFolder = path.join(__dirname, 'results');

const getResults = {};




getResults.alreadyAnagrammed = (filepath) => {
	return getResults.fileToText(filepath)
	  .then( list => list.split('\n') );
}


getResults.fileToText = (filepath) => {
	return new Promise( (resolve, reject) => {
		let data = ''
		fs.readFile(filepath, function(err, result) {
			if (err) {
				reject(err)
			} else {
				data += result;
				resolve(data);
			}
		})
	})
	// return fs.readFile(filepath)
}

module.exports = getResults;