import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import config from '../config'


const PORT = config.port
const debug = new Debug('buzon-quejas-api:root')

// asignar el sistema de promesas
mongoose.Promise = global.Promise

// levantar el server en el puerto especificado
async function start () {
  await mongoose.connect(config.mongoUrl, { useMongoClient: true, })

  app.listen(PORT, () => {
    debug(`Server runing at port ${PORT}`)
  })
}

// ejecutar el la funcion inicial
start()
