const db = require('../../database')

class CarRepository {
  async findAll () {
    const row = await db.query('SELECT * FROM cars')
    return row
  }

  async findById (id) {
    const [row] = await db.query('SELECT * FROM cars WHERE id = $1', [id])
    return row
  }

  async create ({ name, marca, cor, ano, placa, descricao, preco }) {
    const [row] = await db.query(`
      INSERT INTO cars (name, marca, cor, ano, placa, descricao, preco)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `, [name, marca, cor, ano, placa, descricao, preco])

    return row
  }

  async delete (id) {
    const deleteOp = await db.query('DELETE FROM cars WHERE id=$1', [id])
    return deleteOp
  }

  async update (id, { name, marca, cor, ano, placa, descricao }) {
    const [row] = await db.query(`
      UPDATE cars
      SET name=$1, marca=$2, cor=$3, ano=$4, placa=$5, descricao=$6
      WHERE id = $7
      RETURNING *
    `, [name, marca, cor, ano, placa, descricao, id])

    return row
  }
}

module.exports = new CarRepository()
