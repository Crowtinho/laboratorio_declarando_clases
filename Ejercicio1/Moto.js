import{Vehiculo} from './Vehiculo.js'

class Moto extends Vehiculo{
    constructor(make,model,year,displacement){
        super(make,model,year);
        this.displacement = displacement;
    }

    obtenerDetalle(){
       return super.obtenerDetalle() + ` Cilindrada: ${this.displacement} CC`
    }

}

let moto = new Moto("Honda","CBR",2020,250);
console.log(moto.obtenerDetalle());