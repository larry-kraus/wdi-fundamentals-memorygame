console.log("JS file is connected to HTML! Woo!")

/* var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; */

/* if (cardTwo === cardFour) {
	alert("Sorry, try again.");
}
else if (cardOne === cardTwo) {
	alert("You found a match!");
}
else if (cardThree === cardFour) {
	alert("You found a match!")
}
else {
	alert("Sorry, try again.")
}; */

var createCards = function() {
	document.getElementById('game-board');

	for (var i = 0; i < 4; i++) {
		var fourCards = document.createElement('div');
		fourCards.className = 'card';
		world.appendChild(fourCards);
};

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
	}	
	 cardElement.addEventListener('click', isTwoCards)
}

var isMatch = function() {}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		 cardsInPlay = [];
	}
}


