"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'email'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
      include: {
        model: _Foto2.default,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos)
  }

  async store(req, res) {
    try {
      const novoAluno = await _Aluno2.default.create(req.body)
      const { id, nome, email } = novoAluno
      return res.json({ id, nome, email })
    } catch (e) {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'filename'],
        },
      })

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: ['Erro! Nao conseguimos atender sua requisição'],
      })
    }
  }

  async update(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id)

      if (!aluno) {
        return res.status(400).json({
          errors: ['Usuario nao existe'],
        })
      }

      const novosDados = await aluno.update(req.body)
      const { id, nome, email } = novosDados

      return res.json({ id, nome, email })
    } catch (e) {
      return console.log(e)
    }
  }

  async delete(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Usuario nao existe'],
        })
      }

      await aluno.destroy()

      return res.json(null)
    } catch (e) {
      return res.json(null)
    }
  }
}

exports. default = new AlunoController();
