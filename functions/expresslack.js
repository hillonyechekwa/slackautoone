'use strict'
const express = require('express')
const serverless = require('serverless-http')
const app = express()
const bodyparser = require('body-parser')


app.use(bodyparser.json())
app.post('/.netlify/functions/expresslack', (req, res) => {
    const {challenge} = req.body
    res.send({challenge});
})

module.exports.handler = serverless(app);