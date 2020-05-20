const express = require('express')
const routes = express.Router()
const main = require('./controllers/main')
const recipes = require('./controllers/recipes')

routes.get('/', main.index)
routes.get('/about', main.about)
routes.get('/recipes', main.recipes)
routes.get('/recipes/:index', main.recipe)

routes.get('/admin/recipes', recipes.index)
// routes.get('/admin/create', recipes.create)
// routes.get('/admin/:index', recipes.show)
// routes.get('/admin/:index/edit', recipes.edit)
// routes.post('/admin/recipes', recipes.post)
// routes.put('/admin/recipes', recipes.put)
// routes.delete('/admin/recipes', recipes.delete)

module.exports = routes