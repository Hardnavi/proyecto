fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        const productosContainer = document.getElementById('productos-container');
        data.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto';
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <a href="${producto.link}" class="ver-producto">Ver Producto</a>
            `;
            productosContainer.appendChild(productoDiv);
        });
    })
    .catch(error => console.error('Error al cargar los productos:', error));