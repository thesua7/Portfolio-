// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    
    const data = { //Passing variables for dynamic rendering
        greeting: 'Elo! To mai Porfolio site!', //Greeting is working as key
        introduction: 'Learing NodeJs Guyz!'
    }
    res.render('homepage',data)


})


module.exports = router
