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


/* Cassidy used forEach to iterate over the colors array. I wondered
if I could map over them instead. What I forgot is that map() returns a new
array and forEach doesn't return anything, which is what I want */

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName('a')).forEach((e) => {
    e.style.color = getRandoColor();
  })
}

/* I need to handle the click event for the checkbox switch */

const switchToggle = document.querySelector('#theme');

function reset () {
  window.setTimeout(() => {
    switchToggle.innerText = '"click" me';
  }, 2000);
}

switchToggle.addEventListener('mouseup', (e) => {
  if (e.switchToggle === 0) {
    switchToggle.innerText = 'MouseUp Event!';
    reset();
  }
});

switchToggle.addEventListener('keyup', (e) => {
  if (e.code === 'Space' || e.code === 'Enter') {
    switchToggle.innerText = `KeyUp Event: ${e.code}`;
    reset();
  }
});