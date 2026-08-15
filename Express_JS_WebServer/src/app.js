const path = require('path')

const express= require("express")

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')

app.get('/help',(req, res) =>{
    res.send({
        name: 'Gloriya',
        age: 20
    })
})

app.get('/about',(req, res) =>{
    res.send('<h1>About Page</h1>')
})

app.get('/weather',(req, res) =>{
    res.send('weather Page')
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})