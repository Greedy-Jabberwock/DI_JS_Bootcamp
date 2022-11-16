// Exercise 2 : Work With Forms

// Retrieve the form and console.log it.
let form = document.forms[0];
console.log(form);

// Retrieve the inputs by their id and console.log them.
let fname_by_id = document.getElementById('fname');
let lname_by_id = document.getElementById('lname');
console.log(`Retrieving by id:\nFirst: ${fname_by_id}\nLast: ${lname_by_id}`);

// Retrieve the inputs by their name attribute and console.log them.
let fname_by_name = form.elements.fname;
let lname_by_name = form.elements.lname;
console.log(`Retrieving by name:\nFirst: ${fname_by_name}\nLast: ${lname_by_name}`);


form.addEventListener('submit', retrieveNames)
function retrieveNames(e) {
    e.preventDefault(); // to prevent page from refreshing
    
    if (!form.elements) {
        alert('Inputs must be not empty.');
        return null;
    }
    
    for (let i = 0; i < 2; i++) {
        let li = document.createElement('li');
        let value = document.createTextNode(form.elements[i].value);
        li.appendChild(value);
        document.getElementsByClassName('usersAnswer')[0].appendChild(li);
    }
}