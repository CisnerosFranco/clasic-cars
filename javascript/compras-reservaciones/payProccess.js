function buyProduct(email, buyList, next) {
    if(validatePay(email)) {
        buyList.forEach(idP => {
            addUserProducts(email, idP);
        })
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








