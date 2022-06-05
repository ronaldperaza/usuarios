const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Usuario = db.define('usuarios', {
    email: {
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'Correo ya se encuentra registrado'
        },
        validate: {
            isEmail: {
                msg: 'Formato de correo no valido'
            },
            notEmpty: {
                msg: 'Ingresa un correo electronico'
            }
        }
    },
    password: {
        type: DataTypes.STRING
    }, 
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
})

module.exports = Usuario