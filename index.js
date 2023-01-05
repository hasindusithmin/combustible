const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => res.sendStatus(200))

app.get('/logout', (req, res) => {
    try {
        res.cookie('JWT', '', { maxAge: 0 })
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ ERROR: error.message })
    }
})

app.post('/verify', (req, res) => {
    try {
        const { token } = req.headers;
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        res.status(200).json(decoded)
    } catch (error) {
        res.status(401).json({ ERROR: error.message })
    }
})

app.use('/signup',require('./routes/signup'))
app.use('/login',require('./routes/login'))
app.use('/read',require('./routes/read'))
app.use('/readone',require('./routes/readone'))
app.use('/update',require('./routes/update'))
app.use('/exists',require('./routes/exits'))
app.use('/join',require('./routes/joined-queue'))

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(3000, () => {
            console.log('Server Running Port:3000');
        })
    })
    .catch(({ message }) => {
        console.error(message);
    })

// export 'app'
module.exports = app