const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => res.sendStatus(200))

mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('Server Running Port:3000');
        })
    })
    .catch(({message})=>{
        console.error(message);
    })

// export 'app'
module.exports = app