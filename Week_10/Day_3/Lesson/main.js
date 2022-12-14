function fibonacci(num) {
    let first = 0
    let second = 1
    let result = `${first} ${second} `
    while (first < num) {
        let sum = first + second;
        if (sum > num) break;
        result += `${sum} `;
        first = second;
        second = sum;
    }
    console.log(result);
}

fibonacci(1);