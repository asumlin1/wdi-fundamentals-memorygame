

console.log("User flipped " + cardOne);
var cards=['queen','queen','king','king'];
var cardInPlay=[];
var cardOne=cards[0];
cardInPlay.push(cardOne);

console.log('user flipped ' + cardOne);

var cardTwo=cards[2];
cardInPlay.push(cardTwo);

console.log('user flipped ' + cardTwo);

if (cardInPlay.length === 2) {
	if (cardInPlay[0] === cardInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}	
}
