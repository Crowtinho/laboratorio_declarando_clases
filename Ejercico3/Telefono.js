import { Producto } from "./Producto.js";

class Telefono extends Producto{
    constructor(name,price,brand,storage,ram){
        super(name,price,brand);
        this.storage = storage;
        this.ram = ram;
    }

    descripcion(){
        return super.descripcion() +  ` Almacenamiento: ${this.storage} || Ram: ${this.ram} ||`
    }
}

let telefono = new Telefono("Iphone 15",6000000,"Apple",256,12);
console.log(telefono.descripcion());
