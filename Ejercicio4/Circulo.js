import { Figura } from "./Figura.js";

class Circulo extends Figura{
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

    area(){
        let area = Math.PI * (this.radius ** 2);
        return "|| Figura: circulo ||" +  super.area() + `${area.toFixed(3)} ||`
    }
}

let circulo = new Circulo("rojo", 4);
console.log(circulo.area());
