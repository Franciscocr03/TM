const valor = parseInt(prompt('ingrese un valor comprendido entre el 1 y el 5', ''))

switch (valor) {
    case 1:
        document.write('hola soy el numero 1')
        break;

        case 2:
        document.write('hola soy el numero 2')
        break;

        case 3:
        document.write('hola soy el numero 3')
        break;

        case 4:
        document.write('hola soy el numero 4')
        break;

        case 5:
        document.write('hola soy el numero 5')
        break;

    default:
        document.write('debe ingreesar un numero entre el 1 y el 5')
        break;
}