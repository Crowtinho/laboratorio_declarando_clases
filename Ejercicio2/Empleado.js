
export class Empleado{
    constructor(name,age,baseSalary){
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
    }

    calcularSalario(){
        return `Salario base: ${this.baseSalary}`
    }

    obtenerDetalle(){
        return `|| Nombre: ${this.name} || Edad: ${this.age} || ${this.calcularSalario()} ||`
    }
}

 let empleado = new Empleado("juan",18,1430000)
 console.log(empleado.obtenerDetalle());
 