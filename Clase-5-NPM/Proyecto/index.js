const moment = require('moment');

const fechaActual = moment();
const fechaNacimiento = moment('1986-01-01', 'YYYY-MM-DD')

if(fechaNacimiento.isValid()) {
    const diferencia = fechaActual.diff(fechaNacimiento, 'days')
    if(diferencia < 0) {
        console.log(`Faltan ${fechaActual.diff(fechaNacimiento, 'days')} dias`)
    }else {
        console.log(`Desde mi nacimiento, han pasado ${fechaActual.diff(fechaNacimiento, 'days')} dias`)
    }
    
}



