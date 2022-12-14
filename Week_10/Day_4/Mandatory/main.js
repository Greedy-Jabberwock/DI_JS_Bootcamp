// ========== Exercise 1: Conversion ============

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));

(async ()=>{
    let responce = await fetch("https://www.swapi.tech/api/starships/9/")
    let data = await responce.json();
    console.log(data.result);
})();

// ========== Exercise 2: Analyze ============

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling'); // first output 'calling'
//     let result = await resolveAfter2Seconds();
//     console.log(result); // second output 'resolved'
// }

// asyncCall();
