// =================== Exercise 1 : Analyzing The Map Method ==================

[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });
// Prediction: [2, 4, 6]

// ================== Exercise 2: Analyzing The Reduce Method =================
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
// Prediction: [1, 2, 0, 1, 2, 3]


// ====================== Exercise 3 : Analyze This Code ======================
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})
// Prediction: i will be equal to index of num in array.

// ======================== Exercise 4 : Nested Arrays ========================

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
console.log(array.flat());

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flat().join(' '));

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(100));