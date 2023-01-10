const yargs = require('yargs');
const notes_func = require('./notes');

yargs.command({
    command: 'list',
    describe: 'Show the list of all notes',
    builder: {},
    handler() {
        notes_func.all();
    }
});

yargs.command({
    command: 'add',
    describe: 'Add a new note in the json file',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the note',
            type: 'string'
        }
    },
    handler(args) {
        notes_func.add(args.title, args.body);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note using it\'s title',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(args) {
        notes_func.read(args.title);
    }
});

yargs.command({
    command: 'remove',
    descrive: 'Remove note from list',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(args) {
        notes_func.remove(args.title)
    }
})

yargs.parse();