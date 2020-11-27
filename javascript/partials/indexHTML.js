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
    </div>
    <footer id="footer" class="p-5 d-flex bg-dark text-light">
        <div class="container-students ml-5 mr-5">
            <h5>Grupo 12</h5>
            <ul>
                <li>Alderete Natanael</li>
                <li>Cisneros Franco</li>
                <li>Monzon Gabriela</li>
            </ul>
        </div>
        <div class="p-3 ml-4 w-25">
            <p>Esta es la implementación del Trabajo Practico "Clasic Cars" de la materia Especificación y Verificación de Software UNGS 2/2020</p>
        </div>
    </footer>
    `