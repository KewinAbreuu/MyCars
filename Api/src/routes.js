const { Router } = require('express')

const CarController = require('./app/Cotrolllers/CarController')

const router = Router()

router.get('/cars', CarController.index)
router.post('/cars', CarController.store)

module.exports = router
