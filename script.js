const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = 'Mechanical Engineer';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {

// What word are we on
const current = this.wordIndex % this.words.length;
const fullTxt = this.words[current];

// Check if Deleting
if(this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
}

// Inserting Text in element
this.txtElement.innerHTML = `<span id="typed" class="cursor">${this.txt}</span>`

// Initial Type Speed
let typeSpeed = 100;
if(this.isDeleting) {
  typeSpeed /= 3;
}

// Stop at end
 if(this.txt === "Web Developer") {
  function myFunction() {
    var element = document.getElementById("typed");
    element.classList.remove("cursor");
  }
  setTimeout(function() {myFunction()}, 2000);
  return;
} else if(!this.isDeleting && this.txt === fullTxt) {
  // Make pause
  typeSpeed = this.wait;
  // Set delete to true
  this.isDeleting = true;
} else if(this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  // Move to next word
  this.wordIndex++;
  // Pause before start to type
  typeSpeed = 500;
}

  setTimeout(() => this.type(), typeSpeed)
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init () {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}