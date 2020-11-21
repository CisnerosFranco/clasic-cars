const formLogin = `
    <div id="container-login-form" class="bg-secondary">
        <div class="col-sm-12 col-md-10 col-lg-9 col-xl-8 m-auto">
            <form id="form-login" class="border rounded">
                <div class="w-100 d-flex justify-content-center mb-4">
                    <h3 class="text-muted">LOGIN</h3>
                </div>
                <label for="email">Email</label>
                <input type="email" required id="email" placeholder="email" class="border rounded">
                <label for="password">Password</label>
                <input type="password" required id="password" placeholder="password" class="border rounded">
                <button type="submit" class="btn btn-primary mt-4">LOGIN</button>
            </form>
        </div>
        <div id="container-error-message" class="d-none">
            <button id="btn-close-message" onclick="hiddenMessage()">X</button>
            <div id="error-message">ERROR</div>
        </div>
    </div>`