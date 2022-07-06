const CarRepository = require('../Repositories/CarRepository')

class CarController {
  async index (request, response) {
    const contact = await CarRepository.findAll()

    response.json(contact)
  }

  show (request, response) {}

  async store (request, response) {
    const { name, marca, cor, ano, placa, descricao } = request.body

    const contact = await CarRepository.create({ name, marca, cor, ano, placa, descricao })

    response.json(contact)
  }

  update (request, response) {}
  delete (request, response) {}
}

module.exports = new CarController()
