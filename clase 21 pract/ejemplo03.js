const numeros = [100, 56,3,211,90,9];

var mayor = 0; // 100

for(var i=0; i<numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i]
    }
}

console.log(`el mayor de ${numeros} es ${mayor}`)