const fs = require('fs');
const fileName = 'RightLeft.txt'; 

const finalPosition = (data, hitPosition) => {
    let position = 0;
    let steps = 0;
    for (el of data) {
        if (hitPosition && position < 0) {
            return steps;
        }
        if (el === '>') {
            position++;
            steps++;
        } else if (el === '<') {
            position--;
            steps++;
            
        }
    }
    return position 
}

fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Final position: ', finalPosition(data, false));
    console.log('Steps to hit -1 position: ', finalPosition(data, true));

});
