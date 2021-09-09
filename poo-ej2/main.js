import Area  from './area.js'

const mostrar = () => {

    const instancia= new Area()

    instancia.a= document.getElementById("inp_a").value 
    instancia.b= document.getElementById("inp_b").value
    instancia.h= document.getElementById("inp_h").value 

 const respuesta=   instancia.calcularAreaTrap ()


 //me dedico a buscar el h3 para llamar con dicha respuesta 
 document.getElementById("h3").textContent=respuesta
}
const boton= document.getElementById("btn_calcular");
boton.addEventListener("click",mostrar);

const mostrar2 = () => {

    const instancia= new Area()

    instancia.a2= document.getElementById("inp_a2").value 
    instancia.b2= document.getElementById("inp_b2").value

    const respuesta= instancia.calcularAreaTriangulo()
    document.getElementById("h4").textContent=respuesta
}
const boton1=document.getElementById("tnp_calcular");
boton1.addEventListener("click",mostrar2);
