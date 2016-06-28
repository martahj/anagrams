"use strict"

const Promise = require('bluebird');
const path = require('path');
const fs = require('fs');

const resultsFolder = path.join(__dirname, 'results');

const getResults = {};

getResults.addToList = (filepath, text) => {
	return getResults.textInList(filepath, text)
	  .then( alreadyThere => {
	  	if (alreadyThere) {
	  		return;
	  	} else {
	  		let textForList = text + '\n';
	  		return getResults.addTextToFile(filepath, textForList);
	  	}
	  })
}

getResults.textInList = (filepath, text) => {
	return getResults.alreadyAnagrammed(filepath)
	  .then( inList => inList.indexOf(text) > -1)
}

getResults.clear = (filepath) => {
	return new Promise( (resolve, reject) => {
		fs.truncate(filepath, 0, function(err) {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		})
	})
}

getResults.addTextToFile = (filepath, text) => {
	return new Promise( (resolve, reject) => {
		fs.appendFile(filepath, text, function(err) {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		})
	})
}

getResults.alreadyAnagrammed = (filepath) => {
	return getResults.fileToText(filepath)
	  .then( list => list.split('\n') )
	  .then( arr => arr.slice(0, arr.length - 1) )
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
}

module.exports = getResults;