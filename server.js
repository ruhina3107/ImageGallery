const express = require('express')
const app = express()
const cors = require('cors')
// const nodemailer = require('nodemailer')
//var res;
const path = require('path')


app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'public')))

const bodyParser = require('body-parser')

const { check, validationResult } = require('express-validator/check')
const http = require('http').Server(app)

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', function(request, response, next) {
    request.headers.lang = request.headers.lang || 'default'
    console.log(`IP: ${request.connection.remoteAddress} Method: ${request.method} Route: ${request.originalUrl} Body: ` + JSON.stringify(request.body))
    next()
})


const validator = {}
validator.check = check
validator.validation = validationResult


require('./routes/AdminRoutes')(app, validator)

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

http.listen(process.env.PORT, function() {
    console.log('Server is running on', process.env.PORT)
})

