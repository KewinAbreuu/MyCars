const db = require('../../database')

class CarRepository {
  async findAll () {
    const row = await db.query('SELECT * FROM cars')
    return row
  }

  async create ({ name, marca, cor, ano, placa, descricao }) {
    const [row] = await db.query(`
      INSERT INTO cars (name, marca, cor, ano, placa, descricao)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `, [name, marca, cor, ano, placa, descricao])

    return row
  }
}

module.exports = new CarRepository()
