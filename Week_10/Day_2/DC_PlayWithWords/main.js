// 1st Daily Challenge

// function makeAllCaps(words_arr) {
//     return new Promise ((resolve, reject) => {
//         words_arr = words_arr.map(word => {
//             if (typeof word !== 'string') {
//                 reject('Not a word!')
//             } else {
//                 return word.toUpperCase();
//             }
//         });
//         resolve(words_arr);
//     })
// }

// function sortWords(uppercase_words) {
//     return new Promise( (resolve, reject) => {
//         if (uppercase_words.length < 4) {
//             reject('Too short length. Must be at least 4 words in array.')
//         } 
//         uppercase_words.sort();
//         resolve(uppercase_words);
//     } )
// }

// function testExercise1(words_arr) {
//     makeAllCaps(words_arr)
//     .then( res => sortWords(res))
//     .then( res => console.log(res))
//     .catch( err => console.log(err));
// }

// testExercise1([1, "pear", "banana"]);
// testExercise1(["apple", "pear", "banana"]);
// testExercise1(["apple", "pear", "banana", "melon", "kiwi"]);


// 2nd Daily Challenge

let testInput = 'Strange thing happened in archipelage.'

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJS() {
    return new Promise((resolve, reject) => {
        let js_obj = JSON.parse(morse);
        js_obj ? resolve(js_obj) : reject('JSON is empty.');
    })
}

function toMorse(morseJS) {
    return new Promise ( (resolve, reject) => {
        let morse_sentence = testInput.split(' ').join('').split('').map( char => {
            let morse_letter = morseJS[char.toLowerCase()];
            if (morse_letter) {
                return morse_letter
            }
            reject('No matching with morse table.')
        })
        resolve(morse_sentence)
    }) 
}

function joinSentence(sentence) {
    return new Promise ( () => {
        document.getElementById('word').innerHTML = testInput;
        sentence.forEach((word) => {
            let p = document.createElement('p');
            p.innerHTML = word;
            document.getElementById('morse').appendChild(p);
        })
    } )
}

toJS()
.then(res => toMorse(res))
.then(res => joinSentence(res))
.catch(err => console.log(err))