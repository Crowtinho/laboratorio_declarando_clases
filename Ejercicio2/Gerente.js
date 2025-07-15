import { Empleado } from "./Empleado.js";

class Gerente extends Empleado{
    constructor(name,age,baseSalary,bonusPercentage){
        super(name,age,baseSalary);
        this.bonus = bonusPercentage;
    }

    calcularSalario(){
        let total = this.baseSalary + ((this.baseSalary * this.bonus)/100);
        return super.calcularSalario() + ` Bonificación: ${(this.baseSalary * this.bonus)/100} ||`
    }
}

let gerente = new Gerente("Pedro",45,2650000,12);
console.log(gerente.calcularSalario());

