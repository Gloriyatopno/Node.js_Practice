const path = require('path')
const express= require("express")
const hbs = require('hbs')
const { title } = require('process')
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('',(req,res) =>{
    res.render('index', {
        title: 'Weather App',
        name: 'Gloriya'
    })
})

app.get('/help',(req, res) =>{
    res.send({
        name: 'Gloriya',
        age: 20
    })
})

app.get('/about',(req, res) =>{
    res.render('about',{
        title: 'About page',
        name: 'Gloriya'
    })
})

app.get('/weather',(req, res) =>{
    res.send('weather Page')
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})