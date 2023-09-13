import Aluno from '../models/Aluno'
import Foto from '../models/Foto'

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'email'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos)
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body)
      const { id, nome, email } = novoAluno
      return res.json({ id, nome, email })
    } catch (e) {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
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
      const aluno = await Aluno.findByPk(req.params.id)

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
      const aluno = await Aluno.findByPk(req.params.id);

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

export default new AlunoController();
