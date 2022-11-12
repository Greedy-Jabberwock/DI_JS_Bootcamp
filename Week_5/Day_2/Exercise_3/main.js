// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let div_element = document.getElementById('navBar');
div_element.setAttribute('id', 'socialNetworkNavigation');

// We are going to add a new <li> to the <ul>.
//   First, create a new <li> tag (use the createElement method).
let new_li = document.createElement('li');

//   Create a new text node with “Logout” as its specified text.
let li_text_node = document.createTextNode('Logout');

//   Append the text node to the newly created list node (<li>).
new_li.appendChild(li_text_node);

//   Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ul_element = div_element.firstElementChild;
ul_element.appendChild(new_li);

// =============== BONUS ===============
console.log(`First: ${ul_element.firstElementChild.firstChild.textContent}\n
Last: ${ul_element.lastElementChild.textContent}`)
