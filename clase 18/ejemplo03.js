const empleados =[
    {
        nombre:'Francisco', trabajo:'desarrollador'
    },
    {
        nombre:'Ernesto', trabajo:'abogado'
    },
    {
        nombre:'Martin', trabajo:'maestro'
    },
    {
        nombre:'Oscar', trabajo:'desarrollador'
    },
    {
        nombre:'Romina', trabajo:'Jardinera'
    },
    {
        nombre:'Federica', trabajo:'desarrollador'
    }
]

const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)

const noDesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)


console.log(desarrollador)
console.log(noDesarrollador)
