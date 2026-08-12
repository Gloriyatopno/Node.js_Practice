const chalk = require('chalk')
const validate = require('validator')
const notes = require('./notes.js')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const app = yargs(hideBin(process.argv))


// customize yargs version
app.version('1.1.0')


// create add command
app.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// Create remove command
app.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

app.parse()