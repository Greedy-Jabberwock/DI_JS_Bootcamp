// Exercise 1 : HTML Form

// Where will the sent data appear? (GET)
// Send data will appear in the address line, after the question mark with & as separators.

// -----------------------------------

// Exercise 2 : HTML Form #2

// Where will the sent data appear? (POST)
// It will appear in the Payload tab in the Network tab in devtools, data as key:value will be availiable there.

// -----------------------------------

// Exercise 3 : JSON Mario

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

let just_JSON = JSON.stringify(marioGame);
console.log('Non-pretty JSON string:\n' + just_JSON);

let pretty_JSON = JSON.stringify(marioGame, null, 4);
console.log('Pretty JSON string:\n' + pretty_JSON);

