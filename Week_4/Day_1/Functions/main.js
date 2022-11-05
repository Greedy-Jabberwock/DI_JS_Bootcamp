console.log('============= Exercise 1 ===============')

function parentsAges (myAge) {
    mum_age = myAge * 2;
    dad_age = mum_age * 1.2;
    console.log(`Age of my mum: ${mum_age}`);
    console.log(`Age of my dad: ${dad_age}`);
}

parentsAges(28);

console.log('============= Exercise 2 ===============')

function mumsAges (myAge) {
    return myAge * 2;
}

console.log(`My mom's age is ${mumsAges(28)}`);