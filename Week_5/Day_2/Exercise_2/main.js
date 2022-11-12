// Add a “light blue” background color and some padding to the <div>.
let div_element = document.getElementsByTagName('div')[0];
div_element.style.backgroundColor = 'lightblue';

// Do not display the <li> that contains the text node “John”.
// Add a border to the <li> that contains the text node “Pete”.
let li_elements = document.getElementsByTagName('li');
for (li of li_elements) {
    if (li.textContent == 'John') {
        li.style.display = 'none';
    } 
    else if (li.textContent == 'Pete') {
        li.style.border = '1px solid green';
    }
};

// Change the font size of the whole body.
div_element.parentElement.style.fontSize = '4vh'

// ============ Bonus ==========

// If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (div_element.style.backgroundColor === 'lightblue') {
    alert(`Hello, ${li_elements[0].textContent} and ${li_elements[1].textContent}`)
}