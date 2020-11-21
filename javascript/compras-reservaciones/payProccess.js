function buyProduct(email, id, next) {
    let producto = productos.find(p => p.id === id);
    producto.date = new Date().toLocaleDateString();
    if(validatePay(email)) {
        alert(`felicidades, compro el producto ${producto.nombre}`);
        addUserProducts(email, id);
        return next();
    }
}

function validatePay(emailUser) {
    const method = document.getElementById('select-pay-method').value.trim();
    const code = document.getElementById('security-code').value.trim();
    const resultMethod = validateMethod(method, mostrarError);
    const resultAddres = validateAddres(mostrarError);
    if(resultMethod && resultAddres) {
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

function validateAddres(callback) {
    let name = document.getElementById('name-addres').value.trim();
    let num = document.getElementById('number-addres').value.trim();
    if(name.length < 2 || name.length > 20) {
        return callback('el campo direccion debe tener entre 2 y 20 caracteres alfabetico ')
    }
    if(num.length == 0 || num.length >= 5) {
        return callback('El campo Numero de Direcion debe debe tener entre 1 y 5 caracteres.')
    }

    if(/^\[a-zA-Z ]+$/.test(name)) {
        return callback('el campo Direción debe contener solo letras');
    }
    if(!regNum.test(num)) {
        return callback('el campo Numero de Direción debe contener solo Numeros');
    }
    return true;
}






