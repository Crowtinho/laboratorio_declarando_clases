
export class Producto{
    constructor(name,price,brand){
        this.name = name;
        this.price = price;
        this.brand = brand;
    }

    descripcion(){
        return `|| Nombre: ${this.name} || Precio: ${this.price} || Marca: ${this.brand} ||`
    }
}

// let producto = new Producto("portatil",1435000,"Dell")
// console.log(producto.descripcion());
