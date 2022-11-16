// Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.getElementsByTagName('h1')[0];
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.
let article = document.getElementsByTagName('article')[0];
article.removeChild(article.lastElementChild);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener('click', (e)=>e.target.style.background = 'red');

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = h2.nextElementSibling;
h3.addEventListener('click', (e)=>e.target.style.display = 'none');

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.createElement('button');
button.textContent = 'Make bold.'
button.addEventListener('click', (e)=>document.body.style.fontWeight = 'bold');
article.appendChild(button);

// =============== BONUS =================

//  When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener('mouseover', (e)=>e.target.style.fontSize = `${Math.floor((Math.random())*10)}vh`)

//  When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let second = document.getElementsByTagName('p')[1];
second.addEventListener('mouseover', fadeIn);
second.style.opacity = 100;
second.style.transition = 'opacity 1s;'

function fadeIn(e) {
    e.target.style.opacity = 50;
    e.target.style.transition = 'opacity 1s;'
}
