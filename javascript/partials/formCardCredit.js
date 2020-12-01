const formCardCredit = `
    <fieldset class="form w-100 mb-1 " style="box-shadow: none; padding-bottom: 0 !important;" id="form-card-credit">
        <label for="number-card">Numero de Tarjeta</label>
        <input type="number"  id="number-card" placeholder="write">
        <label for="owner">Titular</label>
        <input type="text" id="owner" placeholder="write">
        <label for="expiration-day">Fecha de Vencimiento</label>
        <div class="birth pl-3 mb-0">
            <p><input type="number" id="expiration-day"  placeholder="day" min="1" max="31">
                / <input type="number" id="expiration-month"  placeholder="month" min="1" max="12">
                / <input type="number" id="expiration-year"  placeholder="year" min="2021" ></p>
        </div>
        <label for="code-credit-card">Codigo de Seguridad</label>
        <input type="text" id="code-credit-card" placeholder="write">
    </fieldset>`


/*
    •	Numero de la target
    •	Fecha de vencimiento
    •	Nombre que figura en la tarjeta
    •	Codigo de seguridad
*/
