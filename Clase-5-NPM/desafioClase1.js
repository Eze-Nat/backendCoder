const obj = {}

for (let index = 0; index < 10000; index++) {
    let number = Math.floor(Math.random()*20+1);  // para poner entre que numeros hacer el random se pone * numMayor + numMenor
    if(!obj[number]){
        obj[number]= 1
    }else {
        obj[number]++
    }
}

console.log(obj)