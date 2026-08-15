const express = require('express')

const app = express()
const port = 3000


app.use(express.json())


let students = [
    {
        id: 1,
        name: 'Gloriya',
        course: 'BSc IT'
    },
    {
        id: 2,
        name: 'Grace',
        course: 'BCA'
    }
]

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Student API')
})

// GET - Get all students
app.get('/students', (req, res) => {
    res.json(students)
})

// POST - Add a new student
app.post('/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    }

    students.push(student)

    res.status(201).json(student)
})

// GET by ID - Get one student
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const student = students.find(student => student.id === id)

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        })
    }

    res.json(student)
})

// 404 route
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})