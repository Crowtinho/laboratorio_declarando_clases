
export class Vehiculo{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    obtenerDetalle(){
        return `|| Marca: ${this.make} || Modelo: ${this.model} || Año: ${this.year} ||`;
    }
}

let toyota = new Vehiculo("toyota","corolla",2004);
console.log(toyota.obtenerDetalle());

