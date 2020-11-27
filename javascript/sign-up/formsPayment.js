
"use strict"

function validateBankAccount() {
    const resultCUIT = validateCUIT(document.getElementById('cuit'), mostrarError);
    const resultCBU = validateCBU(document.getElementById('cbu'), mostrarError);
    const resultCode = validateSecurityCode(document.getElementById("code-security-bank"), mostrarError);
    return (resultCBU && resultCUIT && resultCode) == true;
}

function validateCreditCard() {
    const resultCode = validateSecurityCode(document.getElementById('code-credit-card'), mostrarError);
    const resultDay = validateExpirationCard(document.getElementById('expiration-day'), mostrarError);
    const resultMonth = validateExpirationCard(document.getElementById('expiration-month'), mostrarError);
    const resultYear = validateExpirationCard(document.getElementById('expiration-year'), mostrarError);
    const resultOwner = validateOwnerCard(document.getElementById('owner'), mostrarError);
    const resultNumber = validateNumCard(document.getElementById('number-card'), mostrarError);
    
    return (resultNumber && resultOwner && resultDay && resultMonth && resultYear && resultCode) === true;
}

function validateMercadoPago() {
    const resultCode = validateSecurityCode(document.getElementById('code-mercado-pago'), mostrarError);
    const resultEmail= validateEmail(document.getElementById('email-mercado-pago'), mostrarError);
    
    return (resultEmail && resultCode) == true;
}


function validateInfoCar() {
    const resultDomain = validateDomainCar(document.getElementById('domain'), mostrarError);
    const resultColor = validateBrand(document.getElementById('color'), mostrarError);
    const resultYear = validateYearCar(document.getElementById('year'), mostrarError);
    const resultModel= validateBrand(document.getElementById('model'), mostrarError);
    const resultBrand = validateBrand(document.getElementById('brand'), mostrarError);

    return (resultYear && resultDomain && resultColor && resultModel && resultBrand) == true;
}


/*
    ACCOUNT BANK
        *  CBU
        *  CUIT del Titular
*/

function validateCBU(input, callback) {
    const value = input.value.trim();
    if(value.length !== 21) {
        return callback('El CBU debe contener 21 numeros.');
    }
    if(!regNum.test(value)) {
        return callback('El CBU solo debe contener numeros 0-9.')
    }
    return true;
}

function validateCUIT(input, callback) {
    const value = input.value.trim();
    if(value.length < 11 || value.length > 12 || !regNum.test(value)) {
        return callback('CUI debe contener 11 o 12 numeros.');
    }
    return true;
}

/*
    CREDIT CARD
        •	Numero de la target
        •	Fecha de vencimiento
        •	Nombre que figura en la tarjeta
        •	Codigo de seguridad
*/

function validateNumCard(input, callback) {
    const value = input.value.trim();
    return (value.length >= 12 && value.length <= 14 && regNum.test(value)) ? true 
    : callback('El numero de la Targeta de Credito debe Contener entre 12 y 14 numeros.')  
}

function validateExpirationCard(input, callback) {
    const value = input.value.trim();
    return regNum.test(value) ? true : callback('El campo Expiración de la Targeta debe ser completado.'); 
}

function validateOwnerCard(input, callback) {
    const value = input.value.trim();
    return (regName.test(value) && value.length >= 4) ? true 
    : callback('El campo de Titular de la Targeta de Credito debe ser completado.');
}

/*
    MERCADO PAGO
        * Email
        * codigo de seguridad
*/

function validateSecurityCode(input, callback) {
    const value = input.value.trim();
    let campo = '';
    if(input.id === 'code-mercado-pago') {
        campo =  'Mercado Pago'; 
    }
    else if(input.id === 'code-credit-card') {
        campo = 'Targeta de Credito';
    }  
    else if(input.id === "code-security-bank") {
        campo = 'Cuenta Bancaria';
    }
    return (value.length >= 6 && regPass.test(value)) ? true
    : callback(`El campo Codigo de seguridad para ${campo} debe ser completado, solo con caracteres Alfa-Numericos.`);
}


/*
    INFO CARS
        * brand
        * model
        * year
        * color
        * domain
*/


function validateBrand(input, callback) {
    const value = input.value.trim();
    let campo = '';
    switch(input.id) {
        case 'brand':
            campo = 'Marca'
            break;
        case 'model':
            campo = 'Modelo'
            break;
        default:
            campo = 'Color';
    }

    return (value.length >= 3 && regName.test(value)) ? true 
    : callback(`El campo de ${campo} debe ser completado`);
}


function validateYearCar(input, callback) {
    const value = input.value.trim();
    return (value.length === 4 && regNum.test(value)) ? true 
    : callback(`El campo de Año debe ser completado`);
}

function validateDomainCar(input, callback) {
    const value = input.value.trim();
    return (value.length >= 5 && regPass.test(value)) ? true
    : callback('El campo Dominio, debe contener solo caracteres Alfa-Numericos, minimo 5.');
}













