// Exercise 1 : Comparison

function compareToTen(num) {
    return new Promise ((res, rej) => {
        num < 10 ? res(num + ' less then 10') : rej(num + ' greater then 10');
    })
}

compareToTen(15)
    .then(res => console.log(res))
    .catch(err => console.log(err));

compareToTen(8)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Exercise 2 : Promises

let promise = new Promise ((res, rej) => {
    setTimeout(() => res('Success'), 4000)
})

promise
.then(result => console.log(result))
.catch(err => console.log(err));

Promise.resolve('Success');

// Exercise 3 : Resolve & Reject

let prom1 = Promise.resolve(3)
prom1.then(val => console.log(val));

let prom2 = Promise.reject('Boo!')
prom2.catch(err => console.log(err));
