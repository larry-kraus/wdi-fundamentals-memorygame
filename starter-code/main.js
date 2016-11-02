console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; 

/*
if (cardTwo === cardOne) {
	alert("Sorry, try again.");
}
*/
var gameBoard = document.getElementById('game-board');

for (var i = 0; i < 4; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
}

/*
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

*/
