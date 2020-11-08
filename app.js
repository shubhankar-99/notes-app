//const add = require('./utils.js');
// const validator = require('validator');
const chalk = require('chalk');

const yargs = require('yargs');

const notes = require('./notes.js');



// const sum = add(2,4);

// const note = getNotes();

// console.log(note);
// console.log(validator.isEmail('abcdxyz.co'));
// console.log(validator.isURL('abcd.co'));
// const greenMsg = chalk.green('Success');

// console.log(chalk.green.bold.inverse('Success...'));

//Customise yargs version
// yargs.version('1.1.0');

//console.log(process.argv);



// const command = process.argv[2];

// if ( command === 'add' ) {
//     console.log('yes');
// }
// else if( command === 'remove' )
// {
//     console.log('No');
// }

// add, remove, read , list

// Create add Command

yargs.command({
    command: 'add',
    describe: 'Add the notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        },

        body: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body);
    }
})

// Create remove command



yargs.command({
    command: 'remove',
    describe: 'Remove the notes',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        },

        // body: {
        //     describe: 'Note Title',
        //     demandOption: true,
        //     type: 'string'

        // }
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }
})

//Create List Command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        notes.listNotes();
    }
})

//Create read Command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        },

        
    },

    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();