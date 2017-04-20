const fs = require('fs');

function ClozeCard (text,cloze){
	//Scope-safe constructor to ensure objects created without the 'new' keyword will still behave as expected
	if (!(this instanceof ClozeCard)) { 
    return new ClozeCard(text,cloze);
  	};
  	//throw or log an error when the cloze deletion does not appear in the input text.
	this.text = text;
	this.cloze = cloze;
	this.partial = this.text.replace(this.cloze,'...');

	//if cloze not found in full text, log error message
	if (this.text.indexOf(this.cloze)=== -1) {
		console.log('Error: Cloze not found in text!');
	}else{
	
		//store text to be appended to flashcards.txt in a variable
		let logText = "Partial text: " + this.partial + "\n" + "Cloze: " + this.cloze + "\n\n\n";
		//function to append logText to flashcards.txt file
		fs.appendFile("flashcards.txt", logText, "utf8", function(error) {
	    // if there is an error, log the error
		    if (error) {
		        console.log(error);
		    };
		});
	};
	//deleting this.text from object so that answer does not display unless answer function is called
	delete this.text;
};

//function to display full text
ClozeCard.prototype.answer = function(){
	console.log(this.cloze + this.partial.replace('...',''))
};


module.exports = ClozeCard;