import { Empleado } from "./Empleado.js";

class Desarrollador extends Empleado{
    constructor(name,age,baseSalary,language){
        super(name,age,baseSalary);
        this.language = language;
    }

    calcularSalario(){
        return super.calcularSalario() + ` || Lenguaje: ${this.language}`
    }

    obtenerDetalle(){
        return `${super.obtenerDetalle()}`
    }

}

let desarrollador = new Desarrollador("Andres",23,4500000,"Java");
console.log(desarrollador.obtenerDetalle());


