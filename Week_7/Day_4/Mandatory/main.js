// ================= Exercise 1 : Find The Sum ====================

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
let exs1 = (num1, num2) => num1 + num2;

console.log(exs1(3,2));

makeBorder();

// ================= Exercise 2 : Kg And Grams ====================

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

function kgToGramsDeclarative(kgs) {
    return kgs * 1000;
}

let kgToGramsExpression = function (kgs) { return kgs * 1000; }

let kgToGramsArrow = (kgs) => kgs * 1000;

console.log('Test kgs: 3');
console.log('Declarative: ' + kgToGramsDeclarative(3));
console.log('Expression: ' + kgToGramsExpression(3));
// Declarative function can be invoke after and before declaration, must have name. Expression must be declared before calling, don't have name.
console.log('Arrow: ' + kgToGramsArrow(3));

makeBorder();

// ================= Exercise 3 : Fortune Teller ====================

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM.

(function(number_of_children, partners_name, location, job_title) 
    {
        let p = document.createElement('p');
        p.style.marginLeft = '10px';
        p.textContent = `You will be a ${job_title} in ${location}, and married to ${partners_name} with ${number_of_children} kids.`
        document.body.appendChild(p);
    }
    )(3, 'Sarah', 'Rome', 'nuclear ecologyst');


// ================= Exercise 4 : Welcome ====================

(function(username){
    let nav = document.getElementsByClassName('container-fluid')[0];
    let new_div = document.createElement('div');
    new_div.classList.add('text-center');
    new_div.style.display = 'flex';
    let new_img = document.createElement('img');
    new_img.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    new_img.style.width = '30px';
    new_img.style.height = '30px';
    new_div.appendChild(new_img);
    let new_p = document.createElement('p');
    new_p.style.padding = '5px';
    new_p.textContent = username;
    new_div.appendChild(new_p);
    nav.appendChild(new_div);
})('Johan');

// ================= Exercise 5 : Juice Bar ====================

// Don't understand how it works, and for what it may be needed.

function makeJuice(drinkSize) {
    let ingridients = [];
    function addIngridients(first, second, third) {
        ingridients.push(first, second, third);
        function displayJuice() {
            let p = document.createElement('p');
            p.style.paddingLeft = '10px';
            let message = `The client wants a ${drinkSize} juice, 
            containing ${ingridients.join(', ')}`;
            p.textContent = message;
            document.body.appendChild(p);
        }
        return displayJuice;
    }
    return addIngridients;
}

makeJuice('medium')('apple', 'orange', 'mint')('steel', 'glass', 'peach')();

function makeBorder() { console.log('==========================================='); }