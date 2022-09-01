let suma = 0;
let number = 0;

do {
    suma += number;
    number = Number(prompt('Ingrese un numero para sumar (Para detener reste)'));
} while(number >= 0)

alert(`la suma es ${suma}.`);




