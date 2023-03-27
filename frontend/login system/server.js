const express = require('express')
const app = express()

const users = []


app.use(express.urlencoded({ extended: false}))
app.get('/', (req, res) => {
    res.render('Home.js')
})

app.get('/login', (req, res) => {
    res.render('Login.js')
})

app.get('/signup', (req, res) => {
    res.render('Signup.js')
})

app.post('/signup', (req, res) => {
    req.body.name

})

app.listen(3000)