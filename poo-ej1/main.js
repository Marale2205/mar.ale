import Bhaskara from './bhaskara.js'

const mostrar =()=> {

    const a = document.getElementById("inp_a").value
    const b = document.getElementById("inp_b").value
    const c = document.getElementById("inp_c").value

    /*
1-se crea la instancia 
2-se ennvia los paraemtros al constructor 
3-se ejecuta el constuctor 
*/
  const instancia =new Bhaskara(a,b,c);

  //haciendo uso de la isntancia ejecutamos el 
  //metodo de la clase clacular_r1()
 const raiz1= instancia.calcular_r1()
 const raiz2= instancia.calcular_r2()

 document.getElementById("r1").textContent='raiz1= '+raiz1
 document.getElementById("r2").textContent='raiz1= '+raiz2
}



const boton= document.getElementById("btn_calcular");
boton.addEventListener("click",mostrar);