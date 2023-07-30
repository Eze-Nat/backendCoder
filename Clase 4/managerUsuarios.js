const fs = require('fs');

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
        users.push(usuario);
        await fs.promises.writeFile(path, JSON.stringify(users))
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