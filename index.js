// install express with `npm install express` 
const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendStatus(200))

// Listen 
app.listen(3000,()=>{
    console.log('server running port:3000');
})

// export 'app'
module.exports = app