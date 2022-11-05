console.log("================= Exercise 1 ================")
for (let i = 0; i < 15; i++) {
    even_odd = i % 2 == 0 ? 'even' : 'odd'
    console.log(`${i} is ${even_odd}`)
};

console.log("================= Exercise 2.1 ================");
let names= ["john", "sarah", 23, "Rudolf", 34];

for (item of names) {
    if (typeof(item) != 'string') 
        continue;
    word = item.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    console.log(word);
};

console.log("================= Exercise 2.1 ================");
for (item of names) {
    if (typeof(item) != 'string') 
        break;
    console.log(item);
};