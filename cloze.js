const fs = require('fs');

function ClozeCard (text,cloze){
	//Scope-safe constructor to ensure objects created without the 'new' keyword will still behave as expected
	if (!(this instanceof ClozeCard)) { 
    return new ClozeCard(text,cloze);
  	};

  	//if cloze not found in full text, log error message.
	if (text.indexOf(cloze) === -1) {
		console.log('Invalid Cloze Error: '+cloze+' '+'was not found in '+text);
	};

	this.fullText = text;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze,'...');
};

//this method will store flashcard into a flashcards.txt file
ClozeCard.prototype.saveFlashcard = function(){
	//storing text to save in a variable
	let logText = "Partial text: " + this.partial + "\n" + "Cloze: " + this.cloze + "\n\n\n";
	//function to append logText to flashcards.txt file
	fs.appendFile("flashcards.txt", logText, "utf8", function(error) {
		// if there is an error, log the error
		if (error) {
			console.log(error);
		};
	});
};

module.exports = ClozeCard;