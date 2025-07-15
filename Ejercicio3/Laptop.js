import { Producto } from "./Producto.js";

class Laptop extends Producto{
    constructor(name,price,brand,processor,inches){
        super(name,price,brand);
        this.processor = processor;
        this.inches = inches;
    }

    descripcion(){
        return super.descripcion() +  ` Procesador: ${this.processor} || Tamaño pantalla: ${this.inches} pulgadas ||`
    }
}

let laptop = new Laptop("Asus Rog",6000000,"Asus","Intel core i7",12);
console.log(laptop.descripcion());
