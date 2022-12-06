// =================== Exercise 1 : Dog Competition ==================
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

let loopDogYears = (dogs_data) => {
  let totalYears = 0;
  for (dog of dogs_data) {
    totalYears += dog.age;
  }
  return totalYears * 7;
}

let reduceDogYears = data.reduce((total, dog) => total + dog.age * 7, 0);

console.log(loopDogYears(data));
console.log(reduceDogYears);


// ================== Exercise 2 : Email =================


const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
const cleanMail = userEmail3.split('').filter(item => item !== ' ').join('');
console.log(cleanMail);


// ====================== Exercise 3 : Employees #3 ======================


const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

users.forEach(item => {
  item[`${item.firstName} ${item.lastName}`] = item.role;
  delete item.firstName;
  delete item.lastName;
  delete item.role;
})             

console.log(users)

// ======================== Exercise 4 : Array To Object ========================

const letters = ['x', 'y', 'z', 'z'];

let objForLoop = {};
for (char of letters) {
    objForLoop[char] = objForLoop[char] === undefined ? 1 : objForLoop[char] + 1;
}
console.log(objForLoop);

// objForLoop = {};
// let reduceObj = letters.forEach(item => {
//   objForLoop[item] = letters.reduce((total, char) => char == item ? objForLoop[item]++ : total), 1
// })
// console.log(reduceObj)