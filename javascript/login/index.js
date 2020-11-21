function controllLogin(next) {
    document.getElementById('form-login').addEventListener('submit', event => {
        event.preventDefault();
        const email = event.target.children[2].value.trim();
        const password = event.target.children[4].value.trim();
        if(validateLogin(email, password)) {
            next(email);
        }
    })
}

function validateLogin(email, password) {
    if(!existsUser(email)) {
        return mostrarError('No existe un usuario con el Email ingresado.')
    }
    else if(!validatePasswordLogin(email, password)) {
        return mostrarError('La contraseña ingresada no es la correcta.')
    }
    return true;
}








