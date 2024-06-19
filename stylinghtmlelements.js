In this video we will create HTML for our quote container 
and all of the elements inside of it 

We will use abbreviation (emmet) to speed up the process 

start off with div 

<div class="quote-container" id="quote-container"></div>

Emmet will complete 

Keep things tidy with syntax inside of a container 

To comment out in mac command + ?

make a comment 

<!-- Quote -->
<div class="quote-text"></div>

We're going to use this to adjust the size of the font for our quotes 

Now we will add the font awesome icon 

Will have i element with class FAS which stands for font awesome solid 

also a class of fa-quote-left, 

<i class="fas fa-quote-left"></i>

typed out as i.fas.fa-quote-left then enter 

to learn more about how it works check out their web site 

now actual quote itself 

use the spam for this with on quote 

Using span with ID because it wont t ake any space on the page other than the space 
itself and ID to target the element to dynamically change the innertext 

Will use static text for UI building until we add functionality 

Now add span element with the quote 

<span id="quote">There falls a shadow, as T. S. Eliot noted, between the conception and the creation. In the annals of innovation, new ideas are only part of the equation. Execution is just as important.</span>

We can turn on wordwrap by pressing opt + z by breaking up the lines to look at all the content in out window

Now we will add the author 

Now add author and buttons 

<!-- Author -->
<div class="quote-author">
    <span id="author">Walter Isaacson</span>
</div>
<!-- Buttons -->
 <div class="button-container">
    <button class="x-button" id="x" title="Tweet This!"></button>
 </div>

 emmit complete will work in the following way 

 .quote-author

 span#author 

 Name 

 then buttons 

 add title 

 .button-container

 adding a container for buttons so that we can have a flexbox inside of this element 
 that will be different from the flexbox from the body and seperate them 

 next we create a button to post on social media 

 button.x-button#x 

 <!-- Author -->
<div class="quote-author">
    <span id="author">Walter Isaacson</span>
</div>
<!-- Buttons -->
 <div class="button-container">
    <button class="x-button" id="x" title="Tweet This!"></button>
 </div>

 Also added a title so that when we hover over it 
 in case we're unfamiliar, we will have an explanation when it pops up 

 Instead of having text we will have another font awesome icon 

 i.fab.fa-x 

 font awesome brands 

 <i class="fab fa-x"></i>

 Now add another button for a new quote 

 button#new-quote
 New Quote 

 <button id="new-quote">New Quote

 This it for HTML for now 

 Looks pretty good with not much styling 

 Our body is using flexbox 

 centered on both axis which makes things look great 

 Now we look at styling for our container, 
 adding a background color 
 make a maximum width so when the quote text is longer it will wrap to the next line instead of just expanding wider and wider 
Will make quote text itself bigger than author text 
differentiate author text 
modify size of quote icon 

Lets get started 

Switch back to CSS

scroll down and start with quote container 

.quote-container {
    width: auto;
    max-width: 900px;
    
}

We don't want our to just be as wide as possible we want it to be centered on the screen and the lines to wrap
We will also add padding to automatically space things out 
a top and bottom of 20px and a left and right of 30 pixels 
We will also add a border-radius: to give out box a rounded corner look - of 10px 
next add background color, rgba which is same as rgb plus alpha for opacity 
We are making a white box but be able to see a little into the background
finally a box shadow for quote container 
first value is horizontal offset, vertical, blue, and radius
adding another rgba with a 0.2 for opacity 

.quote-container {
    width: auto;
    max-width: 900px;
    padding: 20px 30px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
}

Now lets change text 

.quote-text {
    font-size: 2.75rem;
}

Why use rem instead of pixel for font size, it helps with responsive design. REM stands for relative size compared to root element, specifically the HTML element. In most browsers has default value of 16 pixels

Matters because the 16 pixel value can become bigger on a mobile device 
When a user scales their text bigger 

Keeps things consistent 

1 rem = 16 pixels
2.75 = 44 pixels

Next lets make the quotation mark bigger 
and add another class in case our quote is longer and we want the size a little smaller 

We will add a 

.long-quote {
    font-size: 2rem;
}

We will dynamically turn this on and off when needed with Javascript 

Next, we will change the size of the font awesome icons 

.fa-quote-left {
    font-size: 4rem;
}

Now author text and space it with margin top
Will make it italic and change font weight 

.quote-author {
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 400;
    font-style: italic;
}

Targetting quote author class, give it a margin top of 15 pixers
a font size of 2rem 
Font weight of 400 which is normal everything has a font weight of 700 which is bold 
and a font style of italic to differentiate from our quote 

Now lets look at responsive design on a mobile device 

Open developer tools and click on mobile icon 

Everything looks good but lets add a margin to have a clearly defined box 

We can do this by adding a media query 

We want to add this at the bottom because we want it to override all the other code 

@media screen and

We start with @media and screen because we only want it on screens 
and only be on devices that have less than 1000px of width 
in this case anything that is standard tablet or smaller 

so we want to change our quote container 
to have a margin auto on top and bottom 
but we want to make sure to always to have a margin of 10 pixels on left and write 
and while we are here lets make the quote text a little bit smaller on a mobile device 
so that instead of having 2.75rem we have 2.5rem 

// Media Query: Tablet or Smaller */
@media screen and (max-width: 1000px) {
    .quote-container {
        margin: auto 10 px;
    }

    .quote-text {
        font-size: 2.5rem;
        }
}

Looks better for mobile responsive design 

In Next video we will fix our buttons 
