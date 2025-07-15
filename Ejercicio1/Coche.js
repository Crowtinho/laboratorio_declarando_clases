import{Vehiculo} from './Vehiculo.js'

class Coche extends Vehiculo{
    constructor(make,model,year,numberOfDoors){
        super(make,model,year);
        this.numberOfDoors = numberOfDoors;
    }

    obtenerDetalle(){
        return super.obtenerDetalle() + ` #Puertas: ${this.numberOfDoors} ||`;
        
        // console.log(`|| Marca: ${this.make} || Modelo: ${this.model} || año: ${this.year} || #Puertas: ${this.numberOfDoors} ||`);
    }

}

let mazda = new Coche("Mazda","3",2020,4);
console.log(mazda.obtenerDetalle());