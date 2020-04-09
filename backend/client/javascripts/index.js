document.addEventListener('DOMConentLoaded', function() {
    loadCards();
    renderCards();
})

function loadCards() {
//connect to rails backend and grab card data then return it.


//goes to the url below and grabs the data object on that page.
fetch('http://localhost:3000/cards')
.then(function (response) {
  return response.json();
})
.then(function (cards) {
  renderCards (cards)
})

}


function renderCards(cards) {
// should take card data, iterate through card data, put data on page.

let movieList = document.querySelector('div#card-list');
div.setAttribute('class', 'card-item');
h3.setAttribute('class', 'card-title');
p.setAttribute('class', 'card-description');
