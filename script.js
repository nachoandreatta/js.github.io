//inicio
bienvenido ()
//fewdfhsduigfe23r3fewfwef

let edad = parseInt(prompt("Ingrese su edad"))
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