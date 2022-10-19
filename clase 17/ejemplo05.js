const palabras = ['flavia', 'pablo', 'abeja', 'perro', 'animal']

const palab= palabras.sort(function(b,a){
    if (b>a) return -1;
    return 0
})


console.log(palab)