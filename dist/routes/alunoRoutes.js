"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginrequired = require('../middlewares/loginrequired'); var _loginrequired2 = _interopRequireDefault(_loginrequired);

const router = new (0, _express.Router)()

router.get('/', _loginrequired2.default, _AlunoController2.default.index)
router.get('/:id', _loginrequired2.default, _AlunoController2.default.show)
router.post('/', _AlunoController2.default.store)
router.put('/:id', _loginrequired2.default, _AlunoController2.default.update)
router.delete('/:id', _loginrequired2.default, _AlunoController2.default.delete)

exports. default = router
