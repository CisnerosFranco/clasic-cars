
function renderUserProducts(container, userEmail) {
    const lista = getUserProducts(userEmail);
    let elements = '';
    lista.forEach(producto => {
            elements +=`
            <div class="card product" >
                <div class="card-header">
                    <img src=${producto.img}>
                </div>
                <div class="card-body">
                    <span class="nombre m-auto">${producto.nombre}</span>
                    <span class="descripcion">${producto.descripcion}</span>
                </div>
                <div class="card-footer" style="background: #ccc;">
                    <span class="precio">$ ${producto.precio}</span>
                    <span class="text-muted">${producto.date}</span>
                </div>
            </div>`
    });
    container.innerHTML = elements;
}












