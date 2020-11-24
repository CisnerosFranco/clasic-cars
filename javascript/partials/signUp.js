const signUp = `
    <div class="container-signup bg-secondary">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <div id="first-form-signup"  class="w-100 pt-3 mb-5 m-0 d-flex flex-column justify-content-center align-items-center overflow-hidden">
                <form class="form-signup rounded mt-3 p-0" id="personal-info">
                    <fieldset class="pb-4">
                        <div class="title-legend">
                            <span>Personal Info</span>
                        </div>
                        <label for="name">Nombre</label>
                        <input type="text" id="name" placeholder="write your name">
                        <label for="last-name">Apellido</label>
                        <input type="text" id="last-name" placeholder="write your last name">
                        <label for="dni">DNI</label>
                        <input type="number"  id="dni" placeholder="write your DNI">
                        <label for="birth-day">Fecha de Nacimiento</label>
                        <div class="birth">
                            <p><input type="number" id="birth-day"  placeholder="day" min="1" max="31">
                                / <input type="number" id="birth-month"  placeholder="month" min="1" max="12">
                                / <input type="number" id="birth-year"  placeholder="year" min="1940" max="2010"></p>
                        </div>
                    </fieldset>
                    <fieldset class="pb-5">
                        <div class="title-legend">
                            <span>Login Info</span>
                        </div>
                        <label for="email">Email</label>
                        <input type="email"  id="email" placeholder="write your email">
                        <label for="password">Password</label>
                        <input type="password"  id="password" placeholder="write your password">
                    </fieldset>
                    <button type="submit" class="btn btn-outline-info m-auto mt-0 w-75" >CONTINUE</button>
                </form>
            </div>
            <div class="w-100 p-0 pb-5  flex-column align-items-center justify-content-center d-none"
                id="secondary-forms-signup">
                <button type="button" class="btn btn-outline-warning align-self-start py-2 px-4 m-5"
                    onclick="hiddenSecondaryForms()">BACK
                </button>
                <form id="secondary-form" class="form-signup rounded mt-3 m-auto">
                    <fieldset class="w-100 p-0" style="box-shadow: none;">
                        <div class="select-method">
                            <label for="select-payment-method" class="ml-1 text-light">Select Method</label>
                            <select onchange="handleChangePayMethod()" id="select-payment-method"
                                class="p-1 rounded border-0" style="outline: none;">
                                <option value="credit-card">Targeta de Credito</option>
                                <option value="bank-account">Cuenta Bancaria</option>
                            </select>
                        </div>
                        <div id="container-payment-method" class="d-block " style=" padding-bottom: 30px !important;">
                        <fieldset class="form w-100 mb-1 " style="box-shadow: none; padding-bottom: 0 !important;" id="form-card-credit">
                            <label for="number-card">Numero de Targeta</label>
                            <input type="number"  id="number-card" placeholder="write">
                            <label for="owner">Titular</label>
                            <input type="text" id="owner" placeholder="write">
                            <label for="expiration-day">Fecha de Vencimiento</label>
                            <div class="birth pl-3 mb-0">
                                <p><input type="number" id="expiration-day"  placeholder="day" min="1" max="31">
                                    / <input type="number" id="expiration-month"  placeholder="month" min="1" max="12">
                                    / <input type="number" id="expiration-year"  placeholder="year" min="2020" max="2100"></p>
                            </div>
                            <label for="code-credit-card">Codigo de Seguridad</label>
                            <input type="text" id="code-credit-card" placeholder="write">
                        </fieldset>
                        </div>
                    </fieldset>
                    <button type="button" onclick="addMercadoPago()" id="add-mercado-pago"
                        class="add-mercado-pago btn btn-primary py-2 px-3 mb-5 ml-2 shadow-sm align-self-start">
                        Agregar Mercado Pago
                        <i class="fas fa-plus ml-2 text-light"></i>
                    </button>
                    <div id="container-form-mercado-pago" class="w-100 mb-3">
                    <!-- Mercado Pago -->
                    </div>
                    <fieldset class="form pb-5" id="form-info-car">
                        <div class="title-legend">
                            <span>Car Info</span>
                        </div>
                        <label for="brand">Marca</label>
                        <input type="text"  id="brand" placeholder="write brand">
                        <label for="model">Modelo</label>
                        <input type="text"  id="model" placeholder="write model">
                        <label for="year">Año</label>
                        <input type="number"  id="year" placeholder="write year" min="1960" max="2020">
                        <label for="color">Color</label>
                        <input type="text"  id="color" placeholder="write color">
                        <label for="domain">Dominio</label>
                        <input type="text"  id="domain" placeholder="write domain">
                    </fieldset>
                    <button type="submit" class="btn btn-outline-info m-auto mt-0 mb-5 w-75">SEND</button>
                </form>
            </div>
            <div id="container-error-message" class="d-none">
                <button id="btn-close-message" onclick="hiddenMessage()">X</button>
                <div id="error-message">ERROR</div>
            </div>
        </div>  
    </div>`


