//  Exercise 1:

function getValue() {
    let form1 = document.forms[0];
    console.log(form1.elements.fname.value);
    console.log(form1.elements.lname.value);
}

//  Exercise 2:

let select_form = document.getElementById('select1');
let options = select_form.options;

// Get the value of the 2nd Option
console.log(options[2].value);

// Add a new option with the value 'Work' at the end of the select form
let new_select = document.createElement('option');
new_select.setAttribute('value', 'work');
let work_node = document.createTextNode('Work');
new_select.appendChild(work_node);
select_form.appendChild(new_select);

// Add a new option with the value 'Primary School' at the beginning of the select form 
new_select = document.createElement('option');
new_select.setAttribute('value', 'primary-school');
let primary_text = document.createTextNode('Primary School');
new_select.appendChild(primary_text);
select_form.appendChild(new_select);

select_form.insertBefore(new_select, options[0])

// Change 'College' as selected. Use the 3 properties we learned above
options[3].selected = true;
select_form.value = "banana";
select_form.selectedIndex = 3;
