const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");

const app = express()

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