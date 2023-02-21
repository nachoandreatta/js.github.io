//creo mi array
const autos = [
    {nombre: "Mustang", precio: "1100"},
    {nombre: "Chevy", precio: "1000"},
    {nombre: "Falcon", precio: "900"},
];
//empiezo el armado del carrito
let carrito = [];

let seleccion = prompt("Bienvenido a Autos Alquiler. Desea alquilar algun auto? si/no");

while(seleccion !="si" && seleccion !="no"){
    alert("Ingresa si o no");
    seleccion = prompt("Desea alquilar algun auto? si/no");
}

if(seleccion == "si"){
    alert("Podes elegir sobre nuestros siguientes vehiculos a disposicion:")
    //uso map para recorrer el array
    let listaAutos = autos.map((autos) => "el " + autos.nombre + " tiene un valor de " + autos.precio + 
    " ARS por kilometro");
    //uso join para juntar los valores del array
    alert(listaAutos.join(" - "));
} else if (seleccion == "no"){
    alert("Gracias por su consulta, lo esperamos");
}

while (seleccion != "no"){
    let autos = prompt("Elegi el/los auto/s que queres alquilar (Mustang - Chevy - Falcon)");
    let precio = 0;

    if (autos == "Mustang" || autos == "Chevy" || autos == "Falcon"){
            switch (autos) {
            case "Mustang":
                precio = 1100;
                break;

            case "Chevy":
                precio = 1000;
                break;

            case "Falcon":
                precio = 900;
                break;

            default:
                break;
        }
        let km = parseInt( prompt("Ingrese el estimado de kilometros que hará"))

        carrito.push({autos, km, precio});
        console.log(carrito)
        } else {
            alert("No contamos con ese vehiculo");
        }

        seleccion = prompt("Desea alquilar otro vehiculo? si/no");
        //uso el metodo foreach para declarar los valores de forma unitaria
        while(seleccion === "no"){
            alert("¡gracias por alquilar tu vehiculo!");
            carrito.forEach((carritoFinal) =>  {
                alert(`Usted eligio el vehiculo: ${carritoFinal.autos}, y su monto estimado será de : ${carritoFinal.precio * carritoFinal.km}`)
            })
            break;
        }

    //uso el metodo reduce para calcular el total
    const suma = carrito.reduce((acc, el) => acc + el.precio * el.km, 0)
    alert(`El total estimado será de: ${suma}`)
}
