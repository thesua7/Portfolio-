// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    
    const data = { //Passing variables for dynamic rendering
        image_url: 'https://scontent.fdac85-1.fna.fbcdn.net/v/t1.0-9/90999744_2629562807166989_3398283218149965824_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeFxuv5rx1qFzXYOgkwDjr163BXQ--9XEB3cFdD771cQHWj-_SS11W2lbXlQRfPFjvEwg-NlreZQw9nosqQMLWrv&_nc_ohc=DNjO3x-UDSYAX-4vM8O&_nc_ht=scontent.fdac85-1.fna&oh=db537b1e7aea4649ade22bdcbe29b227&oe=5ED42505',
        greeting: 'Elo! This is my Portfolio site!', //Greeting is working as key
        introduction: 'Learing NodeJs Guyz!',
        languages:[
            {name:'Java',years:3},
            {name:'C',years:3},
            {name:'Ruby',years:1}

        ]
    }
    res.render('homepage',data)


})


module.exports = router
