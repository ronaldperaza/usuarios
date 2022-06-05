const Usuario = require('../models/Usuario')
const router  = require('express').Router()

// obtener todos los usuarios
router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
})

// obtiene un solo usuario
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const usuario = await Usuario.findByPk(id)
    res.json({ usuario })
})

// crear un usuario
router.post('/', async (req, res) => {
    const { email, password } = req.body

    if(!email){
        return res.status(400).json({
            error: "no puedes enviar email en blanco"
        })
    }

    if (!password) {
        return res.status(400).json({
            error: "password no puede estar en blanco"
        })
    }

    const usuario = await Usuario.create({email, password})
    res.json({ usuario })
})

module.exports = router

