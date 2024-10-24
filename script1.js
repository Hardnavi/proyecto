// Variables globales
let carrito = []; // Array para almacenar los productos en el carrito
const cantidadCarrito = document.getElementById('cantidad-carrito'); // Elemento que muestra la cantidad en el carrito
const listaCarrito = document.getElementById('lista-carrito'); // Elemento que muestra la lista de productos en el carrito
const vaciarCarrito = document.getElementById('vaciar-carrito'); // Botón para vaciar el carrito

// Función para añadir un producto al carrito
function añadirAlCarrito(nombreProducto, precioProducto) {
    // Crear un objeto del producto
    const producto = {
        nombre: nombreProducto,
        precio: precioProducto,
    };

    // Añadir el producto al carrito
    carrito.push(producto);
    actualizarCarrito(); // Actualizar la visualización del carrito
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    // Eliminar el producto del carrito
    carrito.splice(index, 1);
    actualizarCarrito(); // Actualizar la visualización del carrito
}

// Función para vaciar el carrito
function vaciarCarritoCompleto() {
    // Vaciar el carrito
    carrito = [];
    actualizarCarrito(); // Actualizar la visualización del carrito
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    // Actualizar la cantidad en el icono del carrito
    cantidadCarrito.textContent = carrito.length;

    // Limpiar la lista de productos en el carrito
    listaCarrito.innerHTML = '';

    // Mostrar los productos en el carrito
    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        const eliminarBoton = document.createElement('button');
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.onclick = () => eliminarDelCarrito(index);
        item.appendChild(eliminarBoton);
        listaCarrito.appendChild(item);
    });

    // Mostrar la lista de productos si hay productos en el carrito
    if (carrito.length > 0) {
        listaCarrito.classList.remove('oculto');
    } else {
        listaCarrito.classList.add('oculto');
    }
}

// Añadir eventos a los botones "Añadir al carrito"
document.querySelectorAll('.añadir-carrito').forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const productoNombre = boton.parentElement.querySelector('h3').textContent;
        const productoPrecio = parseFloat(boton.parentElement.querySelector('p').textContent.replace('Precio: $', ''));
        añadirAlCarrito(productoNombre, productoPrecio);
    });
});

// Añadir evento al botón "Vaciar carrito"
vaciarCarrito.addEventListener('click', vaciarCarritoCompleto);