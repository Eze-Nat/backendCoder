// Hands On Lab


const suma = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if(num1 === 0 || num2 === 0) {
      reject (`Operación innecesaria`)
    }
    if(num1 + num2 < 0){
      reject(`La calculadora solo debe devolver valores positivos`)
    }
    resolve(num1 + num2)
  })
}

const resta = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if(num1===0 || num2 === 0) {
      rejet(`Operación invalida`)
    }
    if(num1 - num2 < 0) {
      reject(`La calculadora solo debe devolver valores positivos`)
    }
    resolve(num1 - num2)
  })
}

const multiplicacion = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if(num1 < 0 || num2 < 0) {
      reject(`La calculadora solo debe devolver valores positivos`)
    }
    resolve(num1 * num2)
  })
}

const division = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if(num1 < 0 || num2 < 0) {
      reject(`La calculadora solo debe devolver valores positivos`)
    }
    resolve(num1 / num2)
  })
}

const calculos = async ()=> {
  try {
    const num1 = 10
    const num2 = 5

    const resultSuma = await suma(num1,num2)
    console.log(resultSuma)

    const resultResta = await resta(num1,num2)
    console.log(resultResta)

    const resultMulti = await multiplicacion(num1,num2)
    console.log(resultMulti)

    const resultDivi = await division(num1,num2)
    console.log(resultDivi)

  } catch (error) {
    console.log(error)
  }
}

calculos();

