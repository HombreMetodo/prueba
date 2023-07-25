// let edad = 10;
// let nombre = "thiago";

// let numeroUno = 5;
// let numeroDos = 6;

// let resultadoResta = numeroUno - numeroDos;
// let resultadoSuma = numeroUno + numeroDos;
// let resultadoDivision = numeroUno / numeroDos;
// let resultadoMultiplicacion = numeroUno * numeroDos;

// console.log("resultado resta", resultadoResta);
// console.log("resultado suma", resultadoSuma);
// console.log("resultado division", resultadoDivision);
// console.log("resultado multiplicacion", resultadoMultiplicacion);

// let edad = parseInt(prompt("ingrese su edad"));

// if(edad >= 18){
//     alert("puedes entrar a la fiesta")
// }else{
//     alert("no puedes entrar a la fiesta");
// }

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

if (nombre != "" && apellido != "") {
    alert("sos un traidor " + nombre + " " + apellido);
} else {
    alert("El nombre y el apellido deben ser ingresados");
}
