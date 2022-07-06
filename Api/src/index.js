const express = require('express')
const cors = require('cors')

const Routes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
// app.use((req, res, next) => {
//   res.header('Acces-Control-Allow-Origin', '*')
//   app.use(cors())
//   next()
// })
app.use(Routes)

app.listen(3002, () => console.log('Servidor Rodando => http://localhost:3002'))
