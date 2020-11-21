'use strict'

function insertHistory(url, template){
    window.history.pushState({
        url,
        template,
    },"", url+'.html')
}

window.addEventListener("popstate", ()=>{
    let url = location.pathname.split('/')[1] + ".html"; 
    switch(history.state.template) {
        case 'rendermain':
            renderMain();
            break;
        case 'renderlogin':
            renderLogin();
            break;
        case 'rendersignup':
            renderSignUp();
            break;
        case 'rendercarrito':
            renderCarrito();
    }
})




// en este modulo, aciendo uso de la api History se implementa las navegación en la Single Page App.
















