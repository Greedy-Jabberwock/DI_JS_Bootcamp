// Retrieve the div and console.log it
let div_to_delete = document.getElementById('container');
console.log(div_to_delete);

// Change the name “Pete” to “Richard”.
div_to_delete.nextElementSibling.lastElementChild.textContent = 'Richard';

// Change each first name of the two <ul>'s to your name.
let li_elements = document.querySelectorAll('.list > li:first-child');
console.log(li_elements);
for (el of li_elements) {
    el.textContent = 'Vitalii';
};

// Delete the <li> that contains the text node “Sarah”.
let all_li_elements = document.getElementsByTagName('li');
for (li of all_li_elements) {
    if (li.textContent == 'Sarah') {
        let parent = li.parentNode;
        parent.removeChild(li);
    };
};

// =================== BONUS ======================

// Add a class called student_list to both of the <ul>'s.
let ul_elements = document.getElementsByTagName('ul');
for (ul of ul_elements) {
    ul.classList.add('student_list');
};

// Add the classes university and attendance to the first <ul>
ul_elements[0].classList.add("university", "attendance");