const datosUsuarios =[
    {
        nombre: 'Flavia', password: 'abc12334'
    },
    {
        nombre: 'Lorenzo', password: 'ags231'
    },
    {
        nombre: 'Fernando', password: 'adasfsda4'
    },
    {
        nombre: 'Lucia', password: 'hola2342'
    },
    {
        nombre: 'Constanza', password: 'a23sadfsa2'
    }
]

const soloPassword = datosUsuarios.map(function(p){
    return p.password;

    
})

console.log(soloPassword)


