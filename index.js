const decrease = document.getElementById("decrease"); // Declare container
const reset = document.getElementById("reset"); // Declare container
const increase = document.getElementById("increase"); // Declare container
const countLabel = document.getElementById("countLabel"); // Declare container
let count = 0; // Declare container "count"

increase.onclick = function(){ // Record the click
    count++; // Add by +1
    countLabel.textContent = count; // Change the text content in container "count"
}

decrease.onclick = function(){ // Record the click
    count--; // Minus by -1
    countLabel.textContent = count; // Change the text content in container "count"
}

reset.onclick = function(){ // Record the click
    count = 0; // Return to 0
    countLabel.textContent = count; // Change the text content in container "count"
}
