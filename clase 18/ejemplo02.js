const alumnos = [
{
    nombre: 'Flavia', edad: 10
},
{
    nombre: 'Lorenzo',  edad: 3
},
{
    nombre: 'Fernando',  edad: 5
},
{
    nombre: 'Lucia',  edad: 2
},
{
    nombre: 'Constanza',  edad: 4
},
{
    nombre: 'Franco',  edad: 3
}

]

const chicos = alumnos.filter(
    alumno => alumno.edad <=4
)

console.log(chicos)


for(let i=0; i<chicos.length; i++){
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}.</p>`)
}