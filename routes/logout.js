
const { Router } = require('express')


const logoutRoute = Router()

logoutRoute.post('/',(req,res)=>{
    try {
        res.cookie('JWT','',{maxAge:0})
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
}) 