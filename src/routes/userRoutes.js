import { Router } from 'express'
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginrequired'

const router = new Router()

// Nao deveria existir
router.get('/', userController.index) // Lista Usuarios
router.get('/:id', userController.show) // Lista usuario

//
router.post('/', userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router

/*
Index --> Lista todos os usuarios -> GET
Store/Create --> Cria um novo usuario -> POST
delete --> apaga um usuario -> DELETE
show --> mostra um usuario -> GET
update --> atualiza um usuario -> PATCH ou PUT
(PATCH >> Altera somente um valor)
(PUT >> Pega um objeto inteiro e substitui por outro objeto inteiro)
*/
