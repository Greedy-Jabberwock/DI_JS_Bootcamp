const fs = require('fs');

fs.readFile('exs1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Exercise 1: Read from file');
    console.log(data);
});


fs.writeFile('exs2.txt', 'Text was written with NodeJS', (err) => {
    if (err) {
        console.log(err);
        return
    } 
    console.log('Successfully written to file.')
});

fs.appendFile('exs2.txt', '\nPlus one line from exs3', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Successfully appended to file.');
})

fs.unlink('toDelete.txt', err => {
    console.log('Successfully deleted');
});