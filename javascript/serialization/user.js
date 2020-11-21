
const userKey = 'userList'

function existsLocalStorage() {
    return localStorage ? true : false;
}

function getUserList() {
    if (!localStorage.getItem(userKey)) {
        localStorage.setItem(userKey, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(userKey));
}

/**
 * actualiza los datos de un usuario ya existente!!.
 */
function saveUser(user) {
    const userList = getUserList();
    const indexUser = userList.findIndex(u => u.personalInfo.email == user.personalInfo.email);
    userList[indexUser] = user;
    localStorage.setItem(userKey, JSON.stringify(userList));
}

/**
 * guarda nuevo usuarios
 */
function saveAsUser(newUser) {
    const userList = getUserList();
    userList.push(newUser);
    localStorage.setItem(userKey,JSON.stringify(userList));
}



/**
 * te dice si existe o no el usuario 
 */
function existsUser(email) {
    const userList = getUserList();
    return userList.find(user => user.personalInfo.email === email) ? true : false
}

function validatePasswordLogin(email, password) {
    const user = getUser(email);
    return user.personalInfo.password === password;
}

function getUser(email) {
    const userList = getUserList();
    return userList.find(user => user.personalInfo.email === email);
}

function getTypeUser(email) {
    const type = getUser(email).personalInfo.type;
    return (type === 'premiun') ? 'premiun' : 'regular';
}

//INFO CARS
//-------------

function insertInfoCar(data) {
    const user = getUser(emailUser);
    user.infoCar = data;
    saveUser(user);
}

function getInfoCar(emailUser) {
    getUser(emailUser).infoCar;
}


//PAYMENT METHOD
//-----------------

function insertPayMetod(emailUser, method) {
    const user = getUser(emailUser);
    if (user.paymentMethods) {
        user.paymentMethods.push(method);
    }
    else {
        user.paymentMethods = [method];
    }
}


function existsPayMethod(emailUser, name) {
    const user = getUser(emailUser);
    if (!user.paymentMethods) {
        return false;
    }
    const paymentMethods = user.paymentMethods;
    return paymentMethods.find(method => method.methodName === name) ? true : false;
}

function getPayMethod(emailUser, name) {
    const user = getUser(emailUser);
    const paymentMethods = user.paymentMethods;
    
    return paymentMethods.find(method => method.methodName === name);
}

function validateCodePayMethod(email, method, code) {
   return getPayMethod(email, method).codigo === code ? true : false;
}


/**PRODUCT AND SERIVCES FOLLOWEDS */

function getFollowProducts(email) {
    return getUser(email).followProducts;
}

function getFollowServices(email) {
    return getUser(email).followServices;
}

function getUserProducts(email) {
    return getUser(email).products;
}

function getUserServices(email) {
    return getUser(email).services;
}

function saveFollowProducts(email, products) {
    let user = getUser(email);
    user.followProducts = products;
    saveUser(user);
}

function saveFollowServices(email, services) {
    let user = getUser(email);
    user.followServices = services;
    saveUser(user);
}

function saveUserProducts(email, products) {
    let user = getUser(email);
    user.products = products;
    saveUser(user);
}

function saveUserServices(email, services) {
    let user = getUser(email);
    user.services = services;
    saveUser(user);
}


function getMetods(email) {
    let ret = ''
    const methods = getUser(email).paymentMethods;
    methods.forEach(e => {
        ret += `<option value="${e.methodName}">${e.methodName}</option>`
    })
    return ret;
}



