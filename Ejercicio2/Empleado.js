
export class Empleado{
    constructor(name,age,baseSalary){
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
    }

    calcularSalario(){
        return `|| Nombre: ${this.name} || Edad: ${this.age} || Salario base: ${this.baseSalary} ||`
    }
}

let empleado = new Empleado("juan",18,1430000)
console.log(empleado.calcularSalario());
 