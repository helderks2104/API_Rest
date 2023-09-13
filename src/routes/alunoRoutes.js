import { Router } from 'express'
import AlunoController from '../controllers/AlunoController'
import loginRequired from '../middlewares/loginrequired'

const router = new Router()

router.get('/', loginRequired, AlunoController.index)
router.get('/:id', loginRequired, AlunoController.show)
router.post('/', AlunoController.store)
router.put('/:id', loginRequired, AlunoController.update)
router.delete('/:id', loginRequired, AlunoController.delete)

export default router
