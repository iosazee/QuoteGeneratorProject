var quotes = [];

function fetchQuotes() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
        .then(respnse => respnse.json())
        .then(data => {
            quotes = data.data
            console.log(quotes)
            
        })
}
    fetchQuotes();
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length))
    document.getElementById("quote-text").innerHTML = `Quote:  ${quotes[randomNumber].quoteText}`;
    document.getElementById("quote-author").innerHTML = `Author: ${quotes[randomNumber].quoteAuthor}`
    
}





