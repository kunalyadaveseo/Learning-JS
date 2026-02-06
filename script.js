// Selecting elements
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

const countSpan = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Variable (state)
let count = 0;

// Change text on button click
changeBtn.addEventListener("click", function () {
  message.textContent = "You clicked the button!";
});

// Increase counter
increaseBtn.addEventListener("click", function () {
  count++;
  countSpan.textContent = count;
});

// Decrease counter
decreaseBtn.addEventListener("click", function () {
  count--;
  countSpan.textContent = count;
});
