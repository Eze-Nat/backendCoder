const ManagerUsuarios = require("./managerUsuarios");

const manager = new ManagerUsuarios();

const crearUsuarios = async() => {
    let consultaUsuarios = await manager.consultarUsuarios();
    console.log(consultaUsuarios);

    let user = {
        nombre: "Ezequiel",
        apellido: "Natale",
        nombreUsuario: "user1",
        contrasena: "1234"
    };
    await manager.crearUsuario(user);
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    console.log(segundaConsultaUsuarios);
    await manager.validarUsuario("user1", "1234")
    await manager.validarUsuario("user2", "1233214")
    await manager.validarUsuario("user1", "12345")
    
}

crearUsuarios();