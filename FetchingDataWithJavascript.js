Next part is getting quotes from an outside quotes 
and how to get quotes locally to customize 

The api chosen 

The format will be different with different api's 

We just need to match what is being returned 

Keep in mind each api will have different properties 

and using the correct syntax that you have 

Lets begin 

Start in the javascript file 

First we will comment Get Quotes from API 

We are going to use an aynchronous fetch request within a try catch statement 

What does that mean?

Am asynchronous function can run at any time independently 
and wont stop the browser from completing the loading of a page 

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes':
    try {

    } catch (error) {
        alert(error) or specific UI element with issues 
        // Catch Error Here
    }
}

a try catch allows us to attempt to complete a fetch request 
but if it doesn't work catch the error information and do something with it 

In a production environment we would potentially pass the error 
into an alert 
or pass it into another specific UI element created showing users 
any issues with functionality 

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes':
    try {
        const response = await fetch(apiUrl);

    } catch (error) {
        // Catch Error Here
    }
}

this means that this (response) constant will not be populated until it has 
some data fetched from our API 

By default if we did not do asynchronous and did not do await 
it would try to set this response value before it would have time to fetch
causing an error 

in this case we are only setting the response constant when we actually
have data and it can be set, or else will be undefined 

now we will use a global variable 

apiQuotes = await response.json();

what that means is that we aregetting the json from our api 
as a response and turning that response into a json object 
because from a web server it is actuallu just a series of strings 

we are going to pass that into a global variable called apiQuotes 

we will have to create this above to be available in every function 

lets use let instead of a constant 

let apiQuotes = [];

the reason we are using let instead of const is because
in the beginning we are setting it as an empty array 
but below we are changing value to change the quotes 

last thing we will do is console.log(apiQuotes)

very last thing 

// on Load 

getQuotes();

full iteration 

let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes':
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        // Catch Error Here
    }
}

// on Load 

getQuotes();

Pulls the array of objects 

Next step is...getting one at a time 

We can use an index number 

with a random number, say 13 

will log only one wyote 

let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
    } catch (error) {
        // Catch Error Here
    }
}

// on Load 

getQuotes();

This is what we want for our project, one quote at a time 
But we want it to be random 
So we will break this out into another function 
so we are only running the fetch once 
and then use another function, 
that is going to pull a single quote from our api array 
and thats the function thats going to get t riggered
every time we press the new button in the UI

So we will start with instead of console logging 
replace with the new function which we will call newQuote 
and create new function 

newQuote();

and above 

// Show New Quote 
function newQuote90 {

}

so how this is going to work is 
we are going to do a similar thing with the index of the array 
but we want it to be dynamic 
and in order to do that we need to use some math functions 

Using Math.random()

This is a math function that returns a number between 0 and 1 
It will return this number to a lot of decimal points 
and in turn we will use this to multiply by the 
length of our api quotes array so that it will never be a higher number 
than the number of our quotes that are in the array 

We will combine this with Math.floor 
Allows us to return the largest whole number, or integer 
that is less than or equal to a given number 

What we will do is wrap our math.random in a map.floor
to make sure we get an integer 

Lets implement 

// Pick a random quote from apiQuotes array 
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
console.log(quote);

full expression 

let apiQuotes = [];

// Show New Quote 
function newQuote() {
    // Pick a random quote from apiQuotes array 
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
console.log(quote);
}

// Get Quotes from API
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

// on Load 

getQuotes();

One last thing 
How can we accomplish a similar thing using a local array in our project 

In index HTML file, we have a script src for a quotes.js file 

In the template project in the quotes.js file we have a const 

local quotes with the array of objects 

Has a lot less than 1600 

Maybe 100 or so, some are null 

We can customize ourselves 

Provided as an option just in case you want to do something customizable 

without a fetch request 

Back in our javascript we will simplify 

To get local quotes, src js file in root 

<script src="quotes.js"></script>

modify this line to 

const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
console.log(quote); 

the above is for pulling quotes from an API 

const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
console.log(quote);

this is for pulling locally 

Next video we will tackle populating our UI 

with current quote and twitter integration