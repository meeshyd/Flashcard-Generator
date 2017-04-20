const fs = require('fs');

function ClozeCard (text,cloze){
	//Scope-safe constructor to ensure objects created without the 'new' keyword will still behave as expected
	if (!(this instanceof ClozeCard)) { 
    return new ClozeCard(text,cloze);
  	};

	this.text = text;
	this.cloze = cloze;
	this.partial = this.text.replace(this.cloze,'...');

	//if cloze not found in full text, log error message.
	if (this.text.indexOf(this.cloze) === -1) {
		console.log('Invalid Cloze Error: '+this.cloze+' '+'was not found in '+this.text);
	};
	//removing this.text from object. full text can only be displayed by calling fullText method.
	delete this.text;
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

//this method displays the full text
ClozeCard.prototype.fullText = function(){
	console.log(this.cloze + this.partial.replace('...',''))
};


module.exports = ClozeCard;