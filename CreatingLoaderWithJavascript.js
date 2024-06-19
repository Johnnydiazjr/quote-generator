Last thing we will add to project is a loading animation 

Will show up when we make out fetch request in the beginning 

It will be hidden once fetch request is finished and show a quote 

For this we will use the W3 schools example 

https://www.w3schools.com/howto/howto_css_loader.asp

There are many options, but this is nice do to its simplicity

We start by adding a div with the class of loader in our 
HTML file 

Also has CSS we need and animation in keyframes 

Add div below div container 

Inside of this lets use the auto complete in VSS Code 

.loader#loader and press enter 

automatically creates the div and ID

add css above media query 

Now in JS file 

First thing we will do is create a constant for our loader 

const loader = document.getElementById('loader');

Next, we will create a loading function and a complete function 

The loading function will show that we are loading 

// Show Loading 
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

hidden attribute is on any html Element
can use it for anything 
we are hiding our div 
and will give it the value of false 
meaning that we do not want it to be hidden 

we will do the opposite with our quote container 
quoteContainer.hidden = true;

so that means when our loader is going we will only see the loader 

In the next function we will add the complete function 
to hide loading 

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

we want to show our quote container and our loader will be hidden 

To test this out comment out getQuotes function 

and instead we are just going to call the loading function

Now we need to add the loading function to the getQuotes function 

Add to the beginning of the get quotes function 

// // Get Quotes from API
async function getQuotes() {
    loading();

Actually goes into the newQuote function 
if it gets a response 

Now lets go to the newQuote function and add at the top as well
because when we press the button, we are actually bypassing the
getQuotes function and only launching the newQuote function 

So we want to make sure we allow it to load again if it takes some time 

// Show New Quote 
function newQuote() {
    loading();

Now at the very bottom, lets comment out a title and call complete function

    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

After we set the quote, we want to hide our complete function 

At the beginning we want our loading function, and at the end 
we want to have our complete function to hide the loader 
and show our quote container 

Because our apiquotes after the first fetch request is stored locally
in our apiQuotes variable, we probably wont 
see the loading happening 
but that is a result of loading so quickly because it is happening 
in a fraction of a second 



