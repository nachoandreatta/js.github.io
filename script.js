//inicio
bienvenido ()

/* NO le de bola a este comment profe que estaba probando algunas cosas
//funcion constructora
function Usuario (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;

//metodo de bienvenida
    this.bienvenido=function () {
        alert("Bienvenida/o " + this.nombre + " " + this.apellido + " a la calculadora de Paypal (uso para mayores de 18 años)");
    }
}

let Usuario1 = new Usuario ("Ignacio", "Andreatta", "29");

Usuario1.bienvenido ();
*/

let edad = parseInt(prompt("Ingresa tu edad"))
if (edad < 18){
    alert("No sos mayor")
} else {
    //body
    let seguir;

    while (seguir != "s") {
    //ingreso el valor
        let inicio = parseInt(prompt("Ingresar 1 para calcular las comisiones si quieres recibir o ingresa 2 para calcular las comisiones si quieres enviar" ))
    //calculadora para recibir
            while (inicio == 1) {
                let valorRecibo = parseInt(prompt("Ingresa cuando quieres recibir"))
                    let resultadoRecibo = (valorRecibo + ((valorRecibo*5.4)/100) + 0.30)
                        alert("para recibir " + valorRecibo + " USD debes enviar " + resultadoRecibo + " USD");
            break;
        }
    //calculadora para enviar
            while (inicio == 2) {
                let valorEnvio = parseInt(prompt("Ingresa cuando quieres enviar"))
                    let resultadoEnvio = (valorEnvio - ((valorEnvio*5.4)/100) - 0.30)
                        alert("si envias " + valorEnvio + " USD recibiras " + resultadoEnvio + " USD")
            break;
        }
    //error al ingresar
            while (inicio != 1 && inicio != 2) {
                alert("valor incorrecto")
            break;
        }
    //break final
        seguir = prompt("¿Quiere salir? s / n");
            while (seguir != "s" && seguir != 'n') {
                seguir = prompt("¿Quiere salir? s / n");
        }
}
    
}

function bienvenido () {
    alert("Bienvenida/o a la calculadora de Paypal (uso para mayores de 18 años)")
}

/*Profe aca le dejo para los caonsignas, la verdad no se me ocurre
nada para meterlos dentro de la calculadora, si me podria dar una mano
con eso se lo super agradeceria */

//creo objeto
class Hotel {
    constructor (numero,personas,precio){
        this.numero = numero;
        this.personas = personas;
        this.precio = precio;
    }
}

//array de habitacion de hotel
const habitacion1 = new Hotel ("habitacion 1",2,5000);
const habitacion2 = new Hotel ("habitacion 2",4,8500);
const habitacion3 = new Hotel ("habitacion 3",5,9900);

const arrayHotel = [habitacion1,habitacion2,habitacion3];
console.log(arrayHotel)

//creo una funcion de orden superior con el foreach
arrayHotel.forEach((habitaciones)=>{
    console.log(habitaciones)
})

//muestro las personas en las habitaciones con un foreach
arrayHotel.forEach(hotel=>console.log(hotel.precio))

