// ========================= Exercise 1 : Location =========================

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// Output: "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"

// ========================= Exercise 2: Display Student Info =========================

function displayStudentInfo(objUser){
    let {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// ========================= Exercise 3: User & Id =========================

const users = { user1: 18273, user2: 92833, user3: 90315 }

let entries = Object.entries(users)
console.log(entries);

entries.forEach(item => item[1] *= 2)
console.log(entries);

// ========================= Exercise 4 : Person Class =========================


class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
  // Output: object

// ========================= Exercise 5 : Dog Class =========================

class Dog {
constructor(name) {
    this.name = name;
}
};

// My answer: 2

// 2
class Labrador extends Dog {
constructor(name, size) {
    super(name);
    this.size = size;
}
};

// ========================= Exercise 6 : Challenges =========================

// [2] === [2] --> false
// {} === {} --> false

// -----------------------

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

// -----------------------

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(voice) {
        return `${voice}! I'm a ${this.type}, named ${this.name}, and I'm ${this.color}`;
    }
}

const farmerCow = new Mammal('Millie', 'cow', 'brown');
farmerCow.sound('Moooo');