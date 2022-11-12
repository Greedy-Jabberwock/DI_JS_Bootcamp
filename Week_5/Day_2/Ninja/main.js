//==================================FUNCTIONS================================
const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

function createTable() {

    let table = document.createElement('table');
    table.style.width = '80%';
    table.style.borderSpacing = '0px';
    table.style.borderLeft = '1px solid black';
    table.style.borderTop = '1px solid black';
    table.style.margin = '10% auto'

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (day in days) {
            let column = !i ? document.createElement('th') : document.createElement('td');
            column.style.borderRight = '1px solid black';
            column.style.borderBottom = '1px solid black';
            column.style.textAlign = 'center';
            column.style.fontSize = '22px';
            column.style.background = (i % 2) ? 'white' : 'darkgrey';
            column.textContent = !i ? days[day] : '.';
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
};

function fillDates(year, month) {
    let day = 1;
    let date = new Date(year, month, day);
    let month_check = month;
    
    let cells = document.getElementsByTagName('td');
    console.log(cells[0]);
    let start = date.getDay() - 1;

    while (month_check == date.getMonth()) {
        cells[start].textContent = day;
        day++;
        start++;
        date = new Date(year, month, day);
    }
};

function createCalendar(year, month) {
    createTable();
    fillDates(year, month);
};

createCalendar(2022, 7);