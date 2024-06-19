The goal now is to populate our UI with the dynamic quote 
text and quote author 
as well as enabling our new buttons 

back in out html file 
we have several id's on our elements 

We have to target these in order to interact with them 
or to take user input 

for example every time we press our new quote button 
we want to trigger a specific function 
in our case our new quote function 

to do that we have to go to the very top of our script.js file 
and create a corresponding constant for each of these elements 
writing in camelCase

Make sure that id's match so that we don't get a undefined error

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const xButton = document.getElementById('x');
const newQuoteBtn = document.getElementById('new-quote');

Now jump back to HTML and remove placeholder text as they will get 
dynamically added in javascript 

Now we want to remove our console.log 
and instead populate the text content of our author and quote elements 
first we will look at author text 

authorText.textContent = quote.author;

this is going to set the value of the text content 
and allow us to pass a string that is then shown in that element
we will use quote.author so we don't get the whole object 

quoteText.tectContent = quote.text;

save and chek it out, perfect 

we can see that it is working 

Replace string of unknown for unknown if empty 

thats a check we're going to have to do in our newQuote function 

before we assign authorText 

Check if Author field is blank and replace it with 'Unknown';

if quote.author does not exist, we can simplify this, 
if there is no quote author!quote.author
then we want our author text to pass a string of unknown 

if (!quote.author) 
    authorText.textContent = 'Unknown';

or else if we do, the text content will be equal author 

Also we want to change if the quote text is really long we will add
some styling, we will change the font size to be smaller on longer quotes 
and normal on every other quote 

// Check quote length to determing the styling 
if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.textContent = quote.text;
}

if the quote is greater than 50, quote text will add a css class 
we pass in name of css class which is long-quote 

or else (if it is shorter)

instead of adding the css class, we will remove the css class 

we will leave quote.Text at the end because we want the content 
one way or another 

Changing quote text length to 120 characters 

Now lets get buttons to work 

Lets start with the twitter button 

Here's a link to start 

https://developer.x.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent

To Tweet a quote 

Prepopulate a tweet with the quote text and author 

Copy the following URL 

https://twitter.com/intent/tweet

eventually we will pass the query parameter of text 
and then inside of that text parameter pass a template string 
that features our quote and author values seperated by a space 
and a dash 

Comment out a title first 
Create a function called tweetQuote() {
    const twitterUrl = (template string) a template string uses backticks.

}

Paste in twitterUrl 

Create a function called tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet`
}

then we add a ? mark to show that we have a parameter 
That parameter will be text 
and then that will be equal to -
We will use a template string because it will allow us to pass in 
a variable and it will be converted into a string 
In order to do that, use $ sign and {}
and in this case we pass in quoteText.textContent 
After that we will have a space, dash and another space to pass our author...
Do the same thing we did before afterwards, $, {} 
and pass authorText.textContent, and end the expression there 
All one line 

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

Next thing we need to do is add 

window.open (which will alow us to open a window)

pass our twitterUrl, and '_blank' ; 

This will allow the twitter window we are opening to do so 
in a new tab 

window.open(twitterUrl, '_blank');

Lastly, to get our button to work 

add event listener 

at the bottom 

first one will be on new quote button 

newQuoteBtn.addEventListener('click', newQuote);

So we want to target a click event and run newQuote function 
we don't need the curly brackets just pass the function name 

we will do the same for our twitter button 

twitterBtn.addEventListener('click', tweetQuote);