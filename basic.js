const fs = require('fs');

function BasicCard(front,back) {
	if (!(this instanceof BasicCard)) { 
    return new BasicCard(front,back);
  	}

	this.front = front;
	this.back = back;
};

//this method will store flashcard into a flashcards.txt file
BasicCard.prototype.saveFlashcard = function(){
	//storing text to save in a variable
	let logText = "Front: " + this.front + "\n" + "Back: " + this.back + "\n\n\n";
	//function to append logText to flashcards.txt file
	fs.appendFile("flashcards.txt", logText, "utf8", function(error) {
		// if there is an error, log the error
		if (error) {
			console.log(error);
		};
	});
};

module.exports = BasicCard;