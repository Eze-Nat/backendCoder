const ManagerUsuarios = require("./managerUsuarios");

const manager = new ManagerUsuarios();

const crearUsuarios = async() => {
    let consultaUsuarios = await manager.consultarUsuarios();
    console.log(consultaUsuarios);

    let user = {
        nombre: "Ezequiel",
        edad: "37",
        apellido: "Natale",
        curso: "BackEnd"
    };
    await manager.crearUsuario(user);
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    console.log(segundaConsultaUsuarios);
}

crearUsuarios();