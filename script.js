let colors = ["#00bfff", "#fc0177", "#00fb2a", "#f8b25a" ];


// IIFE function to fire off all the enclosed
// functions one at a time off the stack
(function(){
  setRandomLinkColor();
  setColorHoverListener();
  setBioEventListener();

  setInterval(() => {
    setRandomLinkColor();
  }, 2500);

})();


// Use a math function to grab the colors of the array
// using color.length to make sure we don't go out of the array.

/* Get a random color */

function getRandoColor() {
  return colors[Math.floor(Math.random() * color.length)];  
}

/* I had to understand why Cassidy used Array.from for some of these functions. According
to MDN, if we have an iterable or we are iterating over something with the .length property we
should use Array.from. That makes sense, as I have function that returns the colors array, that generates a random color and we 
make sure we don't go past the last index of the array with the .length property. still trying to understand what it does though */