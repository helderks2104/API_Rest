"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginrequired = require('../middlewares/loginrequired'); var _loginrequired2 = _interopRequireDefault(_loginrequired);

const router = new (0, _express.Router)()

// Nao deveria existir
router.get('/', _UserController2.default.index) // Lista Usuarios
router.get('/:id', _UserController2.default.show) // Lista usuario

//
router.post('/', _UserController2.default.store)
router.put('/', _loginrequired2.default, _UserController2.default.update)
router.delete('/', _loginrequired2.default, _UserController2.default.delete)

exports. default = router

/*
Index --> Lista todos os usuarios -> GET
Store/Create --> Cria um novo usuario -> POST
delete --> apaga um usuario -> DELETE
show --> mostra um usuario -> GET
update --> atualiza um usuario -> PATCH ou PUT
(PATCH >> Altera somente um valor)
(PUT >> Pega um objeto inteiro e substitui por outro objeto inteiro)
*/
