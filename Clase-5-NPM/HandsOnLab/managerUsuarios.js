const fs = require('fs');
const crypto = require('crypto')

const path = 'Usuarios.json'
class ManagerUsuarios {
    constructor() {

    }
    consultarUsuarios = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8');
            const user = JSON.parse(data);
            return user;
        } else {
            return [];
        }
    }
    crearUsuario = async (usuario) => {
        const users = await this.consultarUsuarios();
        usuario.salt = crypto.randomBytes(128).toString('base64')
        usuario.contrasena= crypto.createHmac('sha256', usuario.salt).update(usuario.contrasena).digest('hex')
        users.push(usuario)
        await fs.promises.writeFile(path, JSON.stringify(users))
    }
    validarUsuario = async (nombreUsuario, contrasena) => {
        const usuarios = await this.consultarUsuarios();
        const usuariosIndex = usuarios.findIndex(user => user.nombreUsuario === nombreUsuario)
        if(usuariosIndex === -1) {
            console.log("Error: el usuario no se encontro")
            return;
        }
        const usuario = usuarios[usuariosIndex]
        const newHash = crypto.createHmac('sha256', usuario.salt).update(contrasena).digest('hex')
        if(newHash === usuario.contrasena){
            console.log("Usuario Logueado")
        }else {
            console.log("Contraseña incorrecta")
        }
    }
}

module.exports = ManagerUsuarios;


// const fs = require('fs');

// const path = 'Usuarios.json'

// class ManagerUsuarios {
//     constructor() {

//     }

//     consultarUsuarios = async() => {
//         if ( fs.existsSync(path)){
//             const data = await fs.promises.readFile(path, "utf-8")
//             const user = JSON.parse(data)
//             return user;
//         }
//     }
//     crearUsuario = async (usuario) => {
//         const users= await this.consultarUsuarios();
//         users.push(usuario)
//         await fs.promises.writeFile(path, JSON.stringify(users))
//     }
// }


// const manager = new ManagerUsuarios();

// const crearUsuarios = async() => {
//     let consultaUsuarios = await manager.consultarUsuarios();
//     console.log(consultaUsuarios)

//     let user = {
//         nombre: "Ezequiel",
//         edad: "37",
//         apellido: "Natale",
//         curso: "BackEnd"
//     };
//     await manager.crearUsuarios(user);
//     let segundaConsultaUsuarios = await manager.consultarUsuarios();
//     console.log(segundaConsultaUsuarios)
// }

// crearUsuarios()