"use strict"

const Promise = require('bluebird');
const path = require('path');
const fs = require('fs');
const rmdir = require('rmdir');


const getResults = {};


getResults.resetDirectory = (folderpath) => {
	return getResults.deleteDirectory(folderpath)
	   .then( () => getResults.makeDirectory(folderpath) )
}

getResults.makeDirectory = (folderpath) => {
	return new Promise( (resolve, reject) => {
		fs.mkdir(folderpath, function(err) {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		})
	})
}

getResults.deleteDirectory = (folderpath) => {
	return new Promise( (resolve, reject) => {
		rmdir(folderpath, function(err, dirs, files) {
			console.log('dirs', dirs);
			console.log('files', files);
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		})
	})
}

getResults.deleteFile = (filepath) => {
	return new Promise( (resolve, reject) => {
		fs.rmdir(filepath, function(err) {
			//
		})
	})
}

getResults.doesFileExist = (folderPath, name) => {
	return new Promise( (resolve, reject) => {
		let sitePath = path.join(folderPath, name);

		fs.exists(sitePath, function(exists) {
			resolve(exists);
		})
	})
}

getResults.makeFile = (folderPath, filename, fileText) => {
	return new Promise( (resolve, reject) => {
		let newFile = path.join(folderPath, filename);
		fs.writeFile(newFile, fileText, function(err) {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		})
	})
}


getResults.addToList = (filepath, text) => {
	let textForList = text + '\n';
	return getResults.addTextToFile(filepath, textForList);
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