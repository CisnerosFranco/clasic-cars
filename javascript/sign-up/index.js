'use strict'

const controllSignUp = (next) => {

    document.getElementById('secondary-form').addEventListener('submit', event => {
        event.preventDefault();
        if (validateSecondaryForms()) {
            saveAsUser(getInfoSignUp());
            alert('Tu cuenta de usuario fue creada de forma exitosa!');
            return next(); // con esta callback volvemos al index, ya registrado el usuario.
        }
    })

    document.getElementById("personal-info").addEventListener('submit', event => {
        event.preventDefault();
        if (validatePersonalInfo()) {
            document.getElementById("secondary-forms-signup").classList.remove('d-none');
            document.getElementById("secondary-forms-signup").classList.add('d-flex');
            document.getElementById("first-form-signup").classList.remove('d-flex');
            document.getElementById("first-form-signup").classList.add('d-none');
        }
    });

   
    window.hiddenSecondaryForms = () => {
        document.getElementById("secondary-forms-signup").classList.remove('d-flex');
        document.getElementById("secondary-forms-signup").classList.add('d-none');
        document.getElementById("first-form-signup").classList.remove('d-none');
        document.getElementById("first-form-signup").classList.add('d-flex');
    }

    window.addMercadoPago = () => {
        document.getElementById('container-form-mercado-pago').innerHTML = formMercadoPago;
        document.getElementById('add-mercado-pago').classList.add('d-none');
    }


    window.handleChangePayMethod = () => {
        const elem = document.getElementById("select-payment-method");
        let containerPayMethod = document.getElementById('container-payment-method');
        const value = elem.value;
        if (value === 'credit-card') {
            containerPayMethod.innerHTML = formCardCredit;
        }
        else if (value === 'bank-account') {
            containerPayMethod.innerHTML = formBankAccount;
        }
    }


    function validateSecondaryForms() {
        const forms = document.querySelectorAll('#secondary-form .form');

        const resultados = [];
     
        forms.forEach(form => {
            if (form.id === 'form-mercado-pago') {
                resultados.push(validateMercadoPago(form));
            }
            else if (form.id === 'form-card-credit') {
                resultados.push(validateCreditCard())
            }
            else if (form.id === 'form-bank-account') {
                resultados.push(validateBankAccount());
            }
            else if (form.id === 'form-info-car') {
                resultados.push(validateInfoCar());
            }
        })
        console.log(resultados);
        return resultados.find(elem => elem == false) == false ? false : true;
    }
}


function mostrarError(error) {
    const element = document.getElementById('error-message');
    element.innerHTML = error;
    element.parentNode.classList.remove('d-none');
}

window.hiddenMessage = () => {
    document.getElementById('container-error-message').classList.add('d-none');
}