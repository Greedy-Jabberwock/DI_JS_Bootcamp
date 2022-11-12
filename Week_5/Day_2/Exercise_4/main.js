// In the js file, create an array called allBooks. This is an array of objects.
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
let book_1 = {
    title: "The shining",
    author: 'Stephen King',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterspy.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fshining%25D1%2584.jpg&f=1&nofb=1&ipt=9c63243cc5cd1802b179c299ac4f47689192ba916c32e7722aea0956283a9729&ipo=images',
    alreadyRead: true
};
let book_2 = {
    title: "I have no mouse, and I must scream",
    author: 'Harlan Ellison',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.harlanellisonbooks.com%2Fwp-content%2Fuploads%2F2018%2F01%2FShoppe079-scaled.jpg&f=1&nofb=1&ipt=6445578af0db74039af419f9e63751e2b4cd621024bc52001cadaf2f1e5ab783&ipo=images',
    alreadyRead: true
};
let all_books = [book_1, book_2]

// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
let table = document.createElement('table');

for (book of all_books) {
    let row = document.createElement('tr');
    let td_element = document.createElement('td');
    let image = document.createElement('img');
    image.setAttribute('src', book.image);
    image.style.width = '100px';
    let text = document.createTextNode(`${book.title} was written by ${book.author}.`);
    td_element.appendChild(image);
    row.appendChild(td_element);
    td_element.appendChild(text);
    if (book.alreadyRead) td_element.style.color = 'red';
    row.appendChild(td_element);
    table.appendChild(row);
}

document.getElementsByClassName('listBooks')[0].appendChild(table);