const CarRepository = require('../Repositories/CarRepository')

class CarController {
  async index (request, response) {
    const cars = await CarRepository.findAll()

    response.json(cars)
  }

  async show (request, response) {
    const { id } = request.params
    const car = await CarRepository.findById(id)
    response.json(car)
  }

  async store (request, response) {
    const { name, marca, cor, ano, placa, descricao } = request.body

    const car = await CarRepository.create({ name, marca, cor, ano, placa, descricao })

    response.json(car)
  }

  async update (request, response) {
    const { id } = await request.params
    const { name, marca, cor, ano, placa, descricao } = request.body

    const car = await CarRepository.update(id, { name, marca, cor, ano, placa, descricao })
    response.json(car)
  }

  async delete (request, response) {
    const { id } = request.params
    await CarRepository.delete(id)
    response.sendStatus(204)
  }
}

module.exports = new CarController()
