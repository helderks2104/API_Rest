import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { resolve } from 'path'
import cors from 'cors'
import helmett from 'helmet'
import homeRoutes from './routes/homeRoutes'
import userRoutes from './routes/userRoutes'
import tokenRoutes from './routes/tokenRoutes'
import alunoRoutes from './routes/alunoRoutes'
import fotoRoutes from './routes/fotoRoutes'
import './database'

const whiteList = [
  'http://localhost:3000',
]

const corsOption = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not Allowed by CORS'))
    }
  },
}

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  // Forma de ler JSON
  middlewares() {
    this.app.use(helmett())
    this.app.use(cors(corsOption))
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    // final

    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')))
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/users/', userRoutes)
    this.app.use('/tokens/', tokenRoutes)
    this.app.use('/alunos/', alunoRoutes)
    this.app.use('/fotos/', fotoRoutes)
  }
}

export default new App().app
