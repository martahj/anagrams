const wordlist = require('wordlist-english');
const americanWords = wordlist.american;
const britishWords = wordlist.british;


module.exports = function(word) {
	return americanWords.indexOf(word) > -1 || britishWords.indexOf(word) > -1;
}