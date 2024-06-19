Buttons 

First we will work on our button container 

Adding the same margin top that we had between our quote text 
and author text - 15 pixels 

we will use flexbox by putting one button in one corner 
and one button in another corner 

aboe media query 

.button-container {
    margin-top: 15pageXOffset;
    display: flex;
    justify-content: space-between;

}

done 

Lets get back to styling buttons themselves 

target button element since we do not have any major differences 

button {
    cursor: pointer;
    font-size: 1.2rem;
    height: 2.5rem;
    border: none;
    border-radiusL 10px;
    color: #fff;
    background-color: #333;
    outline: none;
    padding: 0.5rem 1.8rem;
    box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
}

added pointer for hover, assigned a font size, height, no border, rounded, 
font-color to be white, background color, remove blue outline by outline none,
we want some padding for top and bottom, lastly box shadow 

Now lets add a transition that will look like it is pressed in 

and a slight color change on hover 

button:hover {
    filter: brightness(110%);
}

there are better ways but this is fastest and simplist 

It is subtle, just gets a litle bit brigher 

Now lets get the effect of pressing down on the button 

button: active {
    transform: translate(0, 0.3rem)
}

what we're doing is on the horizontal axis we are not moving the button 
but on the vertical axis we are moving the button down 0.3rem
meaning that it will go into the page 

the other thing we are going to manipulate is the box shadow 
to give slightly less box shadow in order to up the effect 

box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);

Last thing is we just want to modify our twitter button a little bit
we want it to glow twitter blue 
and making the icon a little bigger 

.x-button:hover {
    color: #38a1f3;
}

.fa-x {
    font-size: 1.5rem;
}

That's pretty much it for UI 

In next one we will get to Javascript 