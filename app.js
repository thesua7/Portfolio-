// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express')

const app = express() // initialize app

const config = {
	views: 'views', 	// Set views directory
	static: 'public', 	// Set static assets directory
	logging: true,
	db: vertex.nedb()
}

vertex.configureApp(app, config) // remove line 30 below and replace with this
app.use(vertex.setContext(process.env)) // set CDN and global object on 'req.config' and 'req.site' object

// import routes
const page = require('./routes/page')
// const vertexRouters = require('./routes/vertex')

// set routes
app.use('/', page)
// app.use('/api', vertexRouters.api)
// app.use('/blocks', vertexRouters.blocks)


module.exports = app
