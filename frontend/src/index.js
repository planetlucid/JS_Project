document.addEventListener('DOMContentLoaded', function(){
    // console.log("your js lives")

    loadCards ();
})

function loadCards () {
// connect to rails end and grab card data and return it using fetch.
// get a return as json object - an array of cards. return is also called the promise.
   
fetch('http://localhost:3000/cards')
    .then(function(response){
    return response.json();
    })
    .then(function(cards) {
    renderCards(cards)
    })
}

// take card data array, iterate through it, and put date on page.
function renderCards(cards) {
    
    // grabbed list we wanted to add onto
    let cardList = document.querySelector ('div#card-list');
    cards.forEach(function (card){

        // added h3 and p tag in div
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p')
        
        // Created Classes for the above elements
        div.setAttribute('class', 'card-item');
        h3.setAttribute('class', 'card-title');
        p.setAttribute('class', 'card-question');

        // Created some text for div
        h3.innerText = card.title;
        //create a form element with a submit type stored in a variable
        //append that to each card-item, so you have a button that says "reveal" for each card
        //add an eventlistener for "submit", which would trigger you to
        //set the innerText to the ANSWER
        //p.innerText = card.answer;
        p.innerText = card.question;
        
        
        // added h3 and p tag inside div
        div.appendChild(h3);
        div.appendChild(p);

        // added div in card list.
        cardList.appendChild(div);
    
});


    // debugger;
}