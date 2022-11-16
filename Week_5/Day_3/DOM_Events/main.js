// Exercise 1:

function insertRow() {
    let rows_number = document.getElementsByTagName('tr').length;
    let new_row = document.createElement('tr');
    for (let i = 1; i < 3; i++) {
        let new_column = document.createElement('td');
        let text = document.createTextNode(`Row${rows_number + 1} cell${i}`);
        new_column.appendChild(text);
        new_row.appendChild(new_column);
    }
    document.getElementById('sampleTable').appendChild(new_row);
}

// Exercise 2:
let button = document.getElementById('jsstyle');
button.addEventListener('click', changeColor);
button.addEventListener('dblclick', hideButton);
button.addEventListener('mouseover', changeFontSize);

function changeColor(e) {
    e.target.style.background = 'red';
    e.stopPropagation();
    console.log('Clicked');
}

function hideButton(e) {
    e.target.style.display = 'none';
    console.log('Double clicked');
}

function changeFontSize(e) {
    e.target.style.fontSize = '40px';
    console.log('Mouse over');
}

// Exercise 3:
let div = document.getElementById('jsstyle1');
div.addEventListener('click', changeColor);
div.addEventListener('dblclick', changeFontSize);