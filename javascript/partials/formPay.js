const formPay = (typeUser, cantidad, monto, costoEnvio, options) => {
    return `
        <div class="container-pay-form bg-secondary">
            <div class="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6">
                <form id="pay-form" class="d-flex flex-column justify-content-center align-items-center">
                    <label for="select-payment-method">Metodo de Pago</label>
                    <select id="select-pay-method" class="p-1 border rounded w-75">
                        ${options}
                    </select>
                    <label for="security-code">Codigo de seguridad</label>
                    <input type="password" id="security-code" class="w-75 p-2 border rounded" placeholder="security code">
                    <div class="container-data-pay pt-4 w-75">
                        <div><strong>tipo de cliente: </strong><span class="type-client">${typeUser}</span></div>
                        <div class="monto mb-1">
                            <span><strong>${cantidad} productos</strong></span>
                        </div>
                        <div class="monto">
                            <span><strong>monto de compra</strong> $</span>
                            <span class="precio-product">${monto}</span>
                            <span class="text-muted"> + 50</span>
                        </div>
                        <span class="costo-envio">+ costo de envio ${costoEnvio}</span>
                    </div>
                    <button type="submit" class="btn btn-success w-75 mt-5">PAGAR</button>
                </form>
            </div>
            <div id="container-error-message" class="d-none">
                <button id="btn-close-message" onclick="hiddenMessage()">X</button>
                <div id="error-message">ERROR</div>
            </div>
        </div>`
}