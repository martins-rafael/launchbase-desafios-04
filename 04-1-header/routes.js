const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res) {
    return res.redirect('/teachers')
})

routes.get('/teachers', function (req, res) {
    return res.render('teachers/index')
})

module.exports = routes