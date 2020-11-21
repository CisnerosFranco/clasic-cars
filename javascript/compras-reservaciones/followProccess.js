function addFollowProduct(email, idProduct) {
    const producto = productos.find(p => p.id === idProduct);
    let seguidos = getFollowProducts(email);
    if(!seguidos.find(p => p.id === idProduct)) {
        seguidos.push(producto);
        saveFollowProducts(email, seguidos);
    }
}

function removeFollowProduct(email, idProduct) {
    let seguidos = getFollowProducts(email);
    seguidos = seguidos.filter(elem => elem.id !== idProduct);
    saveFollowProducts(email, seguidos);
}

function addFollowServices(email, idService) {
    const service = servicios.find(s => s.id === idService);
    let seguidos = getFollowServices(email);
    if(!seguidos.find(s => s.id === idService)) {
        seguidos.push(service);
        saveFollowServices(email, seguidos);
    }
}

function removeFollowServices(email, idService) {
    let seguidos = getFollowServices(email);
    seguidos = seguidos.filter(elem => elem.id !== idService);
    saveFollowServices(email, seguidos);
}

function addUserProducts(email, idProduct) {
    const producto = productos.find(p => p.id === idProduct);
    producto.date = new Date().toLocaleDateString();
    let listaProductos = getUserProducts(email);
    listaProductos.push(producto);
    saveUserProducts(email, listaProductos);
}

function addReservados(email, idService) {
    const producto = servicios.find(p => p.id === idService);
    producto.date = new Date().toLocaleDateString();
    let reservados = getUserServices(email);
    reservados.push(producto);
    saveUserServices(email, reservados);
}


function hiddenPropertiesProducts () {
    document.querySelectorAll('.follow-form').forEach(elem => {
        elem.classList.add('d-none');
    })
    document.querySelectorAll('.product .card-footer button').forEach(elem => {
        elem.classList.add('d-none')
    })
}


/**
 * {
        img : './images/llaves-por-cinco',
        nombre : 'Juego de llaves combinadas x 5',
        categoria : ['herramientas', 'todas'],
        descripcion : 'articulo de mecanica',
        ubicación : 'Carapachay',
        id : 'l-c-5',
        precio : '250'

    }


    lista.filter(elem => elem = 'dos')
 */







