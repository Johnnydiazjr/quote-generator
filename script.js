const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const xButton = document.getElementById('x');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote 
function newQuote() {
    // Pick a random quote from apiQuotes array 
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// Check if Author field is blank and replace it with 'Unknown'
if (!quote.author) {
    authorText.textContent = 'Unknown';
} else { 
    authorText.textContent = quote.author; 
}
// Check quote length to determing the styling 
if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
    quoteText.textContent = quote.text;
}

// For a local quote use the following 
// const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// console.log(quote);
// }

// // Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// Tweet Quote 
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners 
newQuoteBtn.addEventListener('click', newQuote);
xButton.addEventListener('click', tweetQuote);

// on Load 

getQuotes();

// to call the function for local quotes
// newQuote();