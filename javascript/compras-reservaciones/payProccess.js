function buyProduct(email, id, next) {
    let producto = productos.find(p => p.id === id);
    producto.date = new Date().toLocaleDateString();
    if(validatePay(email)) {
        alert(`Felicidades, compro el producto ${producto.nombre}`);
        addUserProducts(email, id);
        return next();
    }
}

function validatePay(emailUser) {
    const method = document.getElementById('select-pay-method').value.trim();
    const code = document.getElementById('security-code').value.trim();
    const resultMethod = validateMethod(method, mostrarError);
    if(resultMethod) {
        if(validateCodeInput(code, method, emailUser, mostrarError))
            return true;
    }
}


function validateMethod(value, callback) {
    return (value != 'select') ? true : callback('Se debe selecionar un Metodo de Pago.');
}

function validateCodeInput(value, method, emailUser, callback) {
    console.log(method)
    console.log(value)
    return validateCodePayMethod(emailUser, method, value) ? true
    : callback('El codigo de seguridad ingresado no coincide con el medio de pago selecionado.');
}








