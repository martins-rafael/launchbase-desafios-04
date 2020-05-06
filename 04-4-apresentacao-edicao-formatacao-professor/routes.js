const express = require('express')
const teachers = require('./teachers')
const routes = express.Router()

routes.get('/', function (req, res) {
    return res.redirect('/teachers')
})

routes.get('/teachers', function (req, res) {
    return res.render('teachers/index')
})

routes.get('/teachers/create', function (req, res) {
    return res.render('teachers/create')
})

routes.get('/teachers/:id', teachers.show)

routes.get('/teachers/:id/edit', teachers.edit)

routes.post('/teachers', teachers.post)

routes.get('/students', function (req, res) {
    return res.send('alunos')
})

module.exports = routes