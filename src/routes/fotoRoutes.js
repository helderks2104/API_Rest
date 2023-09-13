import { Router } from 'express'
import fotoController from '../controllers/FotoController'
import loginRequired from '../middlewares/loginrequired'

const router = new Router()

router.post('/', loginRequired, fotoController.store)

export default router
