const edad = parseInt(prompt('ingrese su edad', ''))
let ciudadano;

if(Number.isNaN(edad)){
    document.write('debes ingresar un numero')
    } else if (edad >= 18) {
    ciudadano = "Puede conducir";
    document.write('PODES CONDUCIR')
  } else {
    document.write('NO podes conducir')
  }
  
  console.log(ciudadano);