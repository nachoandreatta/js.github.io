const carrito = document.querySelector('#carrito');
const listaAutos = document.querySelector('#lista-autos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
     listaAutos.addEventListener('click', agregarAuto);
     carrito.addEventListener('click', eliminarAuto);
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function agregarAuto(e) {
     e.preventDefault();
     if(e.target.classList.contains('agregar-carrito')) {
          const auto = e.target.parentElement.parentElement;
          leerDatosAuto(auto);
     }
}

function leerDatosAuto(auto) {
     const infoAuto = {
          titulo: auto.querySelector('h4').textContent,
          precio: auto.querySelector('.precio span').textContent,
          id: auto.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( auto => auto.id === infoAuto.id ) ) { 
          const autos = articulosCarrito.map( auto => {
               if( auto.id === infoAuto.id ) {
                    auto.cantidad++;
                     return auto;
                } else {
                     return auto;
             }
          })
          articulosCarrito = [...autos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoAuto];
     }

     carritoHTML();
}

function eliminarAuto(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-auto') ) {
          const autoId = e.target.getAttribute('data-id')
          
          articulosCarrito = articulosCarrito.filter(auto => auto.id !== autoId);

          carritoHTML();
     }
}

function carritoHTML() {
     vaciarCarrito();
     articulosCarrito.forEach(auto => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>${auto.titulo}</td>
               <td>${auto.precio}</td>
               <td>${auto.cantidad} </td>
               <td>
                    <a href="#" class="borrar-auto" data-id="${auto.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}

function vaciarCarrito() {
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}