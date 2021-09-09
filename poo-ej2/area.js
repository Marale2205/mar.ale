export default class Area{

   a;
   b;
   h;
   b2;
a2;
    constructor(){}

    calcularAreaTrap()
    {
        const resultado= ((this.a+this.b/2))*this.h
        return resultado;
    }

    calcularAreaTriangulo()
    {
        const resultado= ((this.b2*this.a2))/2;
        return resultado;
    }
}