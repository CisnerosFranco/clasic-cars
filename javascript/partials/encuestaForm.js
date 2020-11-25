const encuestaForm = `
        <div class="encuesta w-100 bg-light d-flex flex-column justify-content-center align-items center" style="height: 100%;">
            <div class="col-10 col-lg-8 m-auto" style="height: 80%;">
                <form  class="border p-5 rounded" id="form-encuesta">
                    <div class="medio-de-conocimiento">
                        <label for="medio" class="text-muted mb-3"><h5>Contanos a traves de que medios conociste nuestra pagina.</h5></label>
                        
                        <p><input type="radio" name="medio" class="medio-conocer internet"> Navegando por Internet</p>
                        <p><input type="radio" name="medio" class="medio-conocer redes-sociales"> Redes Sociales</p>
                        <p><input type="radio" name="medio" class="medio-conocer otro-cliente" > Sugerido por otro cliente</p>
                        <p class="text-muted">Si la respuesta es sugerencia de un cliente, indica email por favor</p>
                        <input type="email" id="cliente-que-sugirio" class="px-2 py-1 rounded" placeholder="email">
                        
                    </div>
                    <button type="submit" class="btn btn-success mt-4">Enviar</button>
                </form>
            </div>
        </div>
        <div id="container-error-message" class="d-none">
            <button id="btn-close-message" onclick="hiddenMessage()">X</button>
            <div id="error-message">ERROR</div>
        </div>`