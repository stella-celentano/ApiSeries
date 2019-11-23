const express = require('express')

const route = express.Router()

const SeriesController = require('./../controllers/series')

route.get('/serie', SeriesController.get)
route.get('/serie/:id', SeriesController.getById)
route.post('/serie', SeriesController.create)
route.put('/serie/:id', SeriesController.update)
route.delete('/serie/:id', SeriesController.delete)

module.exports = route
