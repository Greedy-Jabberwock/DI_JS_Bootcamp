// Exercise 3 : Transform The Sentence

// Declare a global variable named allBoldItems.
let allBoldItems = [];

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items() {
    allBoldItems = document.querySelectorAll('p > strong');
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    for (let item of allBoldItems) {
        item.style.color = 'blue';
    }
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
    for (let item of allBoldItems) {
        item.style.color = 'black';
    }
}

getBold_items();

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
for (let item of allBoldItems) {
    item.addEventListener('mouseover', highlight);
    item.addEventListener('mouseout', return_normal);
}
