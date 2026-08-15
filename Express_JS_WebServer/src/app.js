const path = require('path')
const express= require("express")
const hbs = require('hbs')
const { title } = require('process')
const app = express()
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
//setup static directory to serve
app.use(express.static(publicDirectoryPath))
//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

app.get('',(req,res) =>{
    res.render('index', {
        title: 'Weather App',
        name: 'Gloriya'
    })
})

app.get('/help',(req, res) =>{
    res.render('help',{
        helptext: 'This is some helpful text.',
        title: 'Help',
        name: 'Gloriya'
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