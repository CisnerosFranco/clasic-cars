const indexHTML = `
    <div class="container container-articles px-0 py-5">
        <div class="container-etiqueta etiqueta-servicios mb-4">
            <span class="etiqueta">Servicios</span>
        </div>
        <div class="container-services d-flex wrap-wrap mt-3" id="container-services">

        </div>
        <div class="container-etiqueta etiqueta-productos">
            <span class="etiqueta">Productos</span>
            <form class="form-categoria">
                <select id="update-category">
                    <option value="todas">Todas</option>
                    <option value="herramientas">Herramientas</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="materiales">Materiales</option>
                    <option value="vehiculos">Vehiculos</option>
                    <option value="talleres">Talleres</option>
                    <option value="limpieza">Limpieza</option>
                </select>
            </form>
        </div>
        <div class="container-products  mt-2" id="container-products">

        </div>
    
    </div>`