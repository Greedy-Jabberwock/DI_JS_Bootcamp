// =============== Exercise 1 : Analyzing ================

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// Prediction: ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);

// Prediction: ["U", "S", "A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// Prediction: [undefined, undefined, undefined]
// Right answer: [undefined, undefined]


// =============== Exercise 2 : Employees ================

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(item => `Hello, ${item.firstName}`);
console.log(welcomeStudents);

const fullStackResidents = users.filter(item => item.role === 'Full Stack Resident');
console.log(fullStackResidents);

const lastNamesOfResidents = fullStackResidents.map(item => item.lastName);
console.log(lastNamesOfResidents);


// =============== Exercise 3 : Star Wars ================

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let singleString = epic.reduce((fullString, char) => fullString + char + ' ', '');
console.log(singleString);


// =============== Exercise 4 : Employees #2 ================

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedStudents = students.filter(item => item.isPassed);
console.log(passedStudents);

const congratulations = passedStudents.forEach(item => {
    console.log(`Good job ${item.name}, you passed the course in ${item.course}!`);
});

