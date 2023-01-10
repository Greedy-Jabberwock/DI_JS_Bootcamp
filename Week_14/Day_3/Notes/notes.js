const fs = require('fs');
const lodash = require('lodash');

const FILENAME = 'notes.json';

function getJSONData() {
    const raw_data = fs.readFileSync(FILENAME, 'utf-8');
    return JSON.parse(raw_data);
}

function addNote(title, body) {
    const data = getJSONData();
    if (lodash.findIndex(data, {'title': title, 'body': body}) === -1) {
        data.push({'title': title, 'body': body});
        fs.writeFileSync(FILENAME, JSON.stringify(data, null, 4), (err) => {
            if (err) {
                console.error(err);
                return
            }
        })
        console.log('Note added.');
    } else {
        console.log('This note is already saved.');
    }
};

function showAllNotes() {
    const data = getJSONData();
    if (data.length > 0) {
        console.log(`--\nYou have ${data.length} note(s).\n--`)
        for (el of data) {
            console.log(`Title: ${el.title}\nBody: ${el.body}\n--`);
        }

    } else {
        console.log("You don't have notes for now.");
    }
};

function readNote(title) {
    const data = getJSONData();
    let noteIndex = lodash.findIndex(data, {'title': title});
    if (noteIndex !== -1) {
        let note = data[noteIndex];
        console.log(`--\nTitle: ${note.title}\nBody: ${note.body}\n--`);
    } else {
        console.log(`There is no such note in the list.`);
    }
};

function removeNote(title) {
    const data = getJSONData();
    let noteIndex = lodash.findIndex(data, {'title': title});
    if (noteIndex !== -1) {
        lodash.remove(data, item => item.title === title);
        fs.writeFileSync(FILENAME, JSON.stringify(data, null, 4), err => {
            if (err) {
                console.error(err);
                return
            }
        })
        console.log(`Note deleted`);
    } else {
        console.log(`There is no such note in the list to remove.`);
    }
}

module.exports = {
    all: showAllNotes,
    add: addNote,
    read: readNote,
    remove: removeNote
};