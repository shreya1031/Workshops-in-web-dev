// Get all slides
const slides = document.getElementsByClassName("slide");

// Track the current visible slide
let current = 0;

// Track total slides
const total = slides.length;

// Show the first slide initially
slides[current].style.display = "block";

// Get the "Next" button
const nextButton = document.getElementById("next");

// Add click event to the Next button
nextButton.addEventListener("click", function(e) {
  e.preventDefault();           

  // Hide all slides
  for (let i = 0; i < total; i++) {
    slides[i].style.display = "none";
  }

  // Increase current by 1 and wrap around if needed
  current = (current + 1) % total;

  // Show the current slide
  slides[current].style.display = "block";

  // Log current index
  console.log("Current slide index:", current);
});




const prevButton = document.getElementById("previous");

//Add click event to the Next button
prevButton.addEventListener("click", function(e) {
  e.preventDefault();           

 
  for (let i = 0; i < total; i++) {
    slides[i].style.display = "none";
  }

  
 current = (current - 1 + total) % total

 
  slides[current].style.display = "block";

  console.log("Previous slide index:", current);
});