function todoslosParrafos(){
  const allparrafos = document.getElementsByTagName("p");
//   console.log(allparrafos);

  const num = allparrafos.length;
  alert(`hay ${num} elementos <p> dentro de este documento`);
  
}

// todoslosParrafos()

function parrafosCaja1(){
    const caja1 = document.getElementById('caja1');
    const caja1parrafos = caja1.getElementsByTagName('p')

    // console.log(caja1)
    // console.log(caja1parrafos)
  
 const num = caja1parrafos.length;
 alert(`hay ${num} elementos <p> dentro de este documento`);
}


// parrafosCaja1()

function parrafosCaja2(){
    const caja2parrafos =  document.querySelectorAll('#caja2 p');
    const num = caja2parrafos.length;
    
    alert(`hay ${num} elementos <p> dentro de este documento`);
}


parrafosCaja2()