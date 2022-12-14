// 1st Challenge

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]
(async ()=> {
    const result = await Promise.all([promise1, promise2, promise3]);
    console.log(result)
})();

/* Promise.all returns an array of resolved Promises if all promises in array 
is resolved, else it return result of the reject function */

// 2nd challenge

// const form = document.forms.sunrise;

// function getFormData() {
//     let formData = new FormData(form);
//     let values = []
//     for (item of formData.values()) {
//         values.push(item);
//         return {
//             first_city: [values[0], values[1]],
//             second_city: [values[2], values[3]]
//         }
//     }
// }

// async function fetchData ([lat, lon]) {
//     let fetched = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=-${lon}`)
//     let data = await fetched.json();
//     console.log(data)
//     return data.results.sunrise;
// }

// function writeData(fetching_results) {
//     let first_city = `Sunrise in the first city in ${fetching_results[0]}`
//     let second_city = `Sunrise in the second city in ${fetching_results[1]}`
//     document.getElementById('first_sunrise').innerHTML = first_city;
//     document.getElementById('second_sunrise').innerHTML = second_city;
// }

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     let formData = getFormData();
//     try {
//         let fetching_result = await Promise.all([fetchData(formData.first_city), fetchData(formData.second_city)]);
//         writeData(fetching_result)
//     } catch (error) {
//         throw new Error('Wrong coordinates');
//     }
// })