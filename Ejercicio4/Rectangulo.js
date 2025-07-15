import { Figura } from "./Figura.js";

class Rectangulo extends Figura{
    constructor(color, base , height ){
        super(color);
        this.base = base;
        this.height = height;
    }

    area(){
        let area = this.base * this.height;
        return `|| Figura: Rectangulo || Base: ${this.base} || Altura: ${this.height} ||` + super.area() + `${area} ||`
    }
}

let rectangulo = new Rectangulo("rojo",2,2);
console.log(rectangulo.area());
