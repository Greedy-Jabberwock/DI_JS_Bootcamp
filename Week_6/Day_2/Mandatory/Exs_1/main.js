// ------------------------- PART I

const message = 'Hello, world!'

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// let alertHelloWorld = () => {
//     alert(message);
// };

// setTimeout(alertHelloWorld, 2000);

// ---------------------- PART II

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// let addParagraph = () => {
//     let container = document.getElementById('container');
//     let p = document.createElement('p');
//     let text = document.createTextNode(message);
//     p.appendChild(text);
//     container.appendChild(p);
// };

// setTimeout(addParagraph, 2000);

// -------------------- PART III

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let addParagraph = () => {
    let container = document.getElementById('container');
    let p = document.createElement('p');
    let text = document.createTextNode(message);
    p.appendChild(text);
    container.appendChild(p);
    if (container.getElementsByTagName('p').length > 4) {
        clearTimer();
    }
};


let timer = setInterval(addParagraph, 2000);

let clearTimer = () => {
    clearInterval(timer);
}

let stopButton = document.getElementById('clear');
stopButton.addEventListener('click', clearTimer);