(function () {
    const container = document.getElementById('container')
    let usuarioLogeado = null; // lo usaremos el email del usuario que es como el id.


    function renderProducts(container, listaProductos, categoria) {
        container.innerHTML = '';
        let productosNuevos = '';
        listaProductos.forEach(producto => {
            if (producto.categoria.indexOf(categoria) >= 0) {
                productosNuevos +=
                    `<div class="card product" >
                    <div class="card-header">
                        <img src=${producto.img}>
                    </div>
                    <div class="card-body">
                        <span class="nombre m-auto">${producto.nombre}</span>
                        <span class="descripcion">${producto.descripcion}</span>
                    </div>
                    <div class="card-footer">
                        <span class="precio">$ ${producto.precio}</span>
                        <button type="button" class="btn-buy-product" data-id="${producto.id}">COMPRAR</button>
                    </div>
                    <div class="follow-form">
                        <span class="follow-not-is" id="not-follow-${producto.id}" data-id="${producto.id}" data-type="product"><i class="far fa-heart"></i></span>
                        <span class="follow-is d-none" id="is-follow-${producto.id}" data-id="${producto.id}" data-type="product"><i class="fas fa-heart"></i></span>
                    </div>
                </div>`
            }
        })
        container.innerHTML += productosNuevos;
    }

    function renderServices(container, servicios) {
        container.innerHTML = '';
        servicios.forEach(servicio => {
            container.innerHTML +=
                `<div class="servicio">
                    <div class="categoria">
                        ${servicio.categoria}
                    </div>
                    <div class="precio ml-5">
                        $ ${servicio.precio}
                    </div>
                    <div class="solapa"></div>
                    <div class="follow-form">
                        <span class="follow-not-is" id="not-follow-${servicio.id}" data-id="${servicio.id}" data-type="service"><i class="far fa-heart"></i></span>
                        <span class="follow-is d-none" id="is-follow-${servicio.id}" data-id="${servicio.id}" data-type="service"><i class="fas fa-heart"></i></span>
                    </div>
                </div>`
        })
    }


    function updateFollow() {
        if (!usuarioLogeado) {
            hiddenPropertiesProducts();
        }
        else {

            let listProducts = getFollowProducts(usuarioLogeado);
            let listServices = getFollowServices(usuarioLogeado);

            listProducts.forEach(product => {
                document.getElementById(`not-follow-${product.id}`).classList.add('d-none');
                document.getElementById(`is-follow-${product.id}`).classList.remove('d-none');
            })

            listServices.forEach(service => {
                document.getElementById(`not-follow-${service.id}`).classList.add('d-none');
                document.getElementById(`is-follow-${service.id}`).classList.remove('d-none');
            })
        }
    }

    window.renderSignUp = () => {
        hiddenBtnSignIn();
        container.innerHTML = signUp;
        insertHistory('signup', 'rendersignup');
        controllSignUp(renderLogin);
    }

    window.renderLogin = () => {
        hiddenBtnSignIn();
        container.innerHTML = formLogin;
        insertHistory('login', 'renderlogin');
        controllLogin(data => {
            usuarioLogeado = data;
            renderMain();
        });
    }

    window.renderMain = () => {
        container.innerHTML = indexHTML;
        insertHistory('index', 'rendermain');
        renderProducts(document.getElementById('container-products'), productos, 'todas');
        renderServices(document.getElementById('container-services'), servicios);
        document.getElementById('update-category').addEventListener('change', e => {
            renderProducts(document.getElementById('container-products'), productos, e.target.value);
            updateFollow();
        })
        operations();
    }

    function operations() {
        showNav();
        updateFollow();
        document.querySelectorAll('.follow-form .follow-not-is').forEach(elem => {
            elem.addEventListener('click', _ => {
                const type = elem.dataset.type;
                const id = elem.dataset.id;
                if (type === 'product') {
                    addFollowProduct(usuarioLogeado, id);
                }
                else {
                    addFollowServices(usuarioLogeado, id);
                }
                updateFollow();
            })
        })

        document.querySelectorAll('.follow-form .follow-is').forEach(elem => {
            elem.addEventListener('click', _ => {
                const type = elem.dataset.type;
                const id = elem.dataset.id;
                if (type === 'product') {
                    removeFollowProduct(usuarioLogeado, id);
                }
                else {
                    removeFollowServices(usuarioLogeado, id);
                }
                elem.classList.add('d-none');
                elem.parentNode.children[0].classList.remove('d-none');
            })
        })

        document.querySelectorAll('.product .btn-buy-product').forEach(elem => {
            elem.addEventListener('click', () => {
                const type = getTypeUser(usuarioLogeado);
                const precio = Number(productos.find(p => p.id == elem.dataset.id).precio);
                if (type === 'premiun' && precio > 5000) {
                    container.innerHTML = formPay(type, `${precio} - 10%`, 0, getMetods(usuarioLogeado));
                }
                else if (type === 'premiun') {
                    container.innerHTML = formPay(type, `${precio} - 10%`, 300, getMetods(usuarioLogeado));
                }
                else {
                    container.innerHTML = formPay(type, precio, 300, getMetods(usuarioLogeado));
                }

                document.getElementById("pay-form").addEventListener('submit', event => {
                    event.preventDefault();
                    buyProduct(usuarioLogeado, elem.dataset.id, () => {
                        renderCarrito();
                    });
                })
            })
        })
    }

    function hiddenBtnSignIn() {
        document.getElementById('container-btn-signin').classList.remove('d-flex');
        document.getElementById('container-btn-signin').classList.add('d-none');
    }

    function showNav() {
        if (usuarioLogeado) {
            hiddenBtnSignIn();
            document.querySelector('nav').classList.remove('d-none');
            document.getElementById('container-btn-logout').classList.remove('d-none');
        }
        else {
            if (!document.querySelector('nav').classList.contains('d-none')) {
                document.querySelector('nav').classList.add('d-none');
            }
            document.getElementById('container-btn-signin').classList.remove('d-none');
            document.getElementById('container-btn-signin').classList.add('d-flex');
            document.getElementById('container-btn-logout').classList.add('d-none');
        }
    }

    window.renderCarrito = () => {
        insertHistory('carrito', 'rendercarrito');
        container.innerHTML = follow;
        renderProducts(document.getElementById('productos-seguidos'), getFollowProducts(usuarioLogeado), 'todas');
        renderServices(document.getElementById('servicios-seguidos'), getFollowServices(usuarioLogeado));
        renderUserProducts(document.getElementById('productos-comprados'), usuarioLogeado);
        operations();
    }

    window.renderLogout = () => {
        usuarioLogeado = null;
        renderMain();
    }

    renderMain();
})();



