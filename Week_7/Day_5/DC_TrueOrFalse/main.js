function allThruthy() {
    for (let arg of arguments) {
        if (!Boolean(arg)) return false;
    }
    return true;
}

console.log(allThruthy(true, true, true));

console.log(allThruthy(true, false, true));

console.log(allThruthy(5, 4, 3, 2, 1, 0));