const express = require('express')
const dotenv = require('dotenv')
const port = 3000
const path = require('path')
const app = express()

dotenv.config()

// Connecting MongoDB
connectDB()

app.listen(port, () => {
    console.log(`Hello World app listening on port ${process.env.port}`)
    }) 

app.set('view engine', 'ejs')

const user = {
    firstName: 'Billy',
    lastName: 'Kantor'
}

app.get('/', (req, res) => {
	res.render('pages/index', {user:user})
})

app.get('/profile', (req, res) => {
	res.render('pages/profile', {user:user})
})

app.get('/user', (req, res) => {
	res.render('pages/user', {user:user})
})

app.get('/login', (req, res) => {
	res.render('pages/login', {user:user})
})

app.get('/register', (req, res) => {
	res.render('pages/register', {user:user})
})

//Middleware
app.use((req,res,next)=>{
    console.log("Current Time :", Date())
    next()
}, (req,res,next)=>{
    console.log('This is the next function called above')
    next()
})

app.use(express.static(path.join(__dirname, 'public')))