const fs = require('fs')

console.log("Start")

fs.readFile('notes.txt', 'utf8', function(error, data) {
    if (error) {
        console.log("Error reading file")
        return
    }

    console.log(data)
})

console.log("End")