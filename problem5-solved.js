/*
5. Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by 
	taking the first letter of every word, moving it to the end of the word and adding "ay".

"The quick brown fox" -> "Hetay uickqay rownbay oxfay".

*/

// Assuming phrase is formatted and void of punctuation 

// Translate function takes provided phrase and returns the translated version of that phrase
function translate(phrase){

	// Store words into an initialized array
	var words = phrase.toLowerCase().split(' ');

	// Initialize an array to store a translated word
	var translatedWord = [];
	// Initialize an array to store the collection of translated words
	var translatedWords = [];

	// Loop index i through length of words array
	for(var i in words){
		// Clear translatedWord array
		translatedWord = [];

		// Check if word is long enough to translate normally
		if(words[i].length >= 3){
			// Add the secound to last letter of a word to the empty translated word array
			translatedWord.push(words[i][words[i].length-2]);
			// Add the last letter of a word to the word array
			translatedWord.push(words[i][words[i].length-1]);
			// Add the remaining letters of a word to the end of the tranlated word 
			translatedWord.push(words[i].slice(0,words[i].length-2));
		}

		// Add 'ay' to the end of the translated word to complete the pig laten translation algorithm
		translatedWord.push("ay");

		// Add the translated word to the end of the collection of translated words
		translatedWords.push(translatedWord.join(''));
	}

	// Capitilize the first letter of the first translated word in the collection by spliting it into a character array,... 
	translatedWords[0] = translatedWords[0].split('');
	// capitilizing the first character of that array... 
	translatedWords[0][0] = translatedWords[0][0].toUpperCase();
	// and joining the character array back into a string.
	translatedWords[0] = translatedWords[0].join('');

	// Return the collection of translated words as a singular string
	return translatedWords.join(' ');
}

