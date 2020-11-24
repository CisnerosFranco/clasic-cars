
"use strict"

const regName = /^[a-zA-Z ]+$/
const regEmail = /^[a-zA-Z@._0-9 ]+$/
const regPass = /^[a-zA-Z0-9]+$/
const regNum = /^\d+$/



function validatePersonalInfo() {
    const resultPass = validatePassword(document.getElementById('password'), mostrarError)
    const resultEmail = validateEmail(document.getElementById('email'), mostrarError)
    const resultDay = validateBirth(document.getElementById('birth-day'), mostrarError)
    const resultMonth = validateBirth(document.getElementById('birth-month'), mostrarError)
    const resultYear = validateBirth(document.getElementById('birth-year'), mostrarError);
    const resultDNI = validateDNI(document.getElementById('dni'), mostrarError)
    const resultSurname = validateName(document.getElementById('last-name'), mostrarError)
    const resultName = validateName(document.getElementById('name'), mostrarError)
    
    if(resultName && resultSurname && resultEmail && resultPass && resultDNI && resultDay && resultMonth && resultYear ) {
        if(validateUser(mostrarError)) {
            return true;
        }
    }
}


function validateCardCredit() {
    const inputs = document.querySelectorAll('#card-credit fieldset input');
    switch (inputs.id) {
        case 'number-card':
            console.log('number-card');
            break;
        case 'headline':
            console.log('headline');
            break;
        case 'expiration-day':
            console.log('expiration-day');
            break;
        case 'expiration-month':
            console.log('expiration-month');
            break;
        case 'expiration-year':
            console.log('nexpiration-year');
            break;
    }
}



function validateName(input, callback) {

    const valor = input.value.trim();
    const campo = (input.id === 'name') ? 'Nombre' : 'Apellido';
    if(!regName.test(valor)) {
       return callback(`El campo ${campo} debe contener solo Letras y espacios.`);
    }
    if(valor.length < 4 || valor.length > 20) {
        return callback(`El campo ${campo} debe contener entre 4 y 20 letras.`);
    }
    return true;
}

function validateDNI(input, callback) {
    const valor = input.value.trim();
    if(valor.length < 8 || valor.length > 9) {
        return callback(`El campo DNI debe contener 8 o 9 numeros.`);
    }
    if(!regNum.test(valor)) {
       return callback(`El campo DNI debe contener solo caracteres numericos.`);
    }
    return true;
}

function validateBirth(input, callback) {
    const value = Number(input.value.trim());
    const id = input.id;
    let limite = 0;
    let campo = '';
    if(id === 'birth-day') {
        campo = 'dia';
        limite = 31;
    }
    else if( id === 'birth-month'){
        campo = 'mes';
        limite = 12;
    }
    else {
        campo = 'año';
        limite = 2010;
    }

    if(value > limite) {
        return callback(`El campo ${campo} no debe superar los valores ${campo}`);
    }

    return regNum.test(value) ? true : callback(`El campo Nacimiento debe ser completado.`); 
}

function validateEmail(input, callback) {
    const value = input.value.trim();
    return regEmail.test(value) ? true : callback('El campo Email contiene caracteres no permitios.')
}

function validatePassword(input, callback) {
    const value = input.value.trim();
    if(value.length < 8 ) {
        return callback('El campo Password debe contener por lo menos 8 caracteres Alfa-Numericos.');
    }
    return regPass.test(value) ? true : callback('El campo Password contiene caracteres no permitios.')
}

function validateUser(callback) {
    const email = document.getElementById('email').value.trim();
    if(existsUser(email)) {
        callback('El Email ingresado ya se encuentra registrado');
    }
    return true;
}







