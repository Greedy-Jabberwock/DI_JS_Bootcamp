// In your Javascript file, use setInterval to move the <div id="animate"> 
// to the right side of the <div id="container">, when the button is clicked on.
let box = document.getElementById('animate');
let field = document.getElementById('container');

let myMove = () => {
    let start = Date.now();

    let timer = setInterval(
        () => {
            let timePass = Date.now() - start;
            box.style.left = timePass / 5 + 'px';
            if (field.offsetWidth <= box.offsetLeft + box.offsetWidth) {
                clearInterval(timer);
            }
        },
        10
    );
};