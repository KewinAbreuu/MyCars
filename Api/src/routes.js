const { Router } = require('express')

const CarController = require('./app/Cotrolllers/CarController')

const router = Router()

router.get('/cars', CarController.index)
router.post('/cars', CarController.store)
router.delete('/cars/:id', CarController.delete)
router.put('/cars/:id', CarController.update)

module.exports = router
