function getPersonalInfo() {
    return {
        password: document.getElementById('password').value.trim(),
        email: document.getElementById('email').value.trim(),
        nacimiento: `${document.getElementById('birth-day').value}-${document.getElementById('birth-month').value}-${document.getElementById('birth-year').value}`,
        DNI: document.getElementById('dni').value,
        apellido: document.getElementById('last-name').value.trim(),
        nombre: document.getElementById('name').value.trim(),
        type: 'standard'
    }
}

function getInfoAccountBank() {
    if(document.getElementById('form-bank-account')) {
        return {
            methodName : 'Cuenta Bancaria',
            CUIT : document.getElementById('cuit').value.trim(),
            CBU : document.getElementById('cbu').value.trim(),
            codigo : document.getElementById('code-security-bank').value.trim()
        }
    }
}

function getInfoMercadoPago() {
    if(document.getElementById('form-mercado-pago')) {
        return {
            methodName : 'Mercado Pago',
            email : document.getElementById('email-mercado-pago').value.trim(),
            codigo : document.getElementById('code-mercado-pago').value.trim()
        }
    }
}

function getInfoCard() {
    if(document.getElementById('form-card-credit')) {
        return {
            methodName : 'Targeta de Credito',
            numero: document.getElementById('number-card').value,
            expiracion: `${document.getElementById('expiration-day').value}-${document.getElementById('expiration-month').value}-${document.getElementById('expiration-year').value}`,
            titular: document.getElementById('owner').value.trim(),
            codigo: document.getElementById('code-credit-card').value.trim()
        }
    }
}

function getInfoSignUp() {
    const methods = [];
    if(getInfoMercadoPago()) {
        methods.push(getInfoMercadoPago());
    }
    if(getInfoAccountBank()) {
        methods.push(getInfoAccountBank());
    }
    if(getInfoCard()) {
        methods.push(getInfoCard());
    }
    
    return {
        personalInfo : getPersonalInfo(),
        carInfo : getInfoCard(),
        paymentMethods : methods,
        followProducts : [],
        followServices : [],
        products : [],
        services : []
    }
}

























