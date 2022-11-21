// ------------------------ Exercise 1: Scope ------------------------

// -------------------------------------------------------------------

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne() // Prediction:  a = 3;
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? || It will be an error, const cannot be reassigned.

// -------------------------------------------------------------------

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() // a = 0;
// funcTwo()
// funcThree() // a = 5;
// #2.2 What will happen if the variable is declared 
// with const instead of let ? || It will catch an error at the call funcTwo()

// -------------------------------------------------------------------

// #3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() 
// funcFive() // a = 'hello' (wrong answer)

// Note: cathced an error at funcFour() call;

// -------------------------------------------------------------------

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() // a = 'test'
// #4.2 What will happen if the variable is declared 
// with const instead of let ? || It will be 'test', bacause we have two different "a" variable - in global scope(1) and in block scope('test');

// -------------------------------------------------------------------

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`); // a = 5
// }
// alert(`outside of the if block ${a}`); // a = 2

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? || Same result, because of different scopes


// ------------------ Exercise 2 : Ternary Operator ------------------

// let winBattle = () => {
//     return true;
// }
// let experincePoints = winBattle() ? 10 : 1;
// console.log(experincePoints);

// ------------------ Exercise 3 : Is It A String ? ------------------

// let isString = (obj) => {
//     return typeof(obj) == 'string' ? true : false;
// }
// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0]));

// ----------------------- Exercise 4 : Colors -----------------------

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// for (let i in colors) {
//     console.log(`${i}# choice is ${colors[i]}`);
// }
// console.log(colors.includes('Violet') ? 'Yeah!' : 'No...');

// --------------------- Exercise 5 : Colors #2 ----------------------

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// for (let i = 1; i <= colors.length; i++) {
//     let suffix = ordinal[i] ? ordinal[i] : ordinal[0];
//     console.log(`${i}${suffix} choice is ${colors[i-1]}`);
// }

// -------------------- Exercise 6 : Bank Details --------------------

const VAT = 17;
const details = ["+200", "-100", "+146", "+167", "-2900"];
let bankAmount = 10000;

let monthExpenses = (amount, details, VAT) => {
    for (let item of details) {
        let intItem = parseInt(item);
        amount += intItem - (intItem / 100 * VAT);
    }
    console.log(`Current bank amount: ${amount}`);
};

monthExpenses(bankAmount, details, VAT);