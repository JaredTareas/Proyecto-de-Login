

const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value.trim();
        const mensajeError = document.getElementById("mensajeError");

        if (validarCorreo(correo) && validarPassword(password)) {
            localStorage.setItem("usuarioLogueado", correo);

            window.location.href = "index.html";
        } else {
            mensajeError.classList.remove("d-none");
            mensajeError.textContent = "Ingresa un correo válido y una contraseña segura.";
        }
    });
}




const nombreUsuario = document.getElementById("nombreUsuario");
const btnSalir = document.getElementById("btnSalir");

if (nombreUsuario) {
    const usuario = localStorage.getItem("usuarioLogueado");

    if (!usuario) {
        window.location.href = "login.html";
    } else {
        nombreUsuario.textContent = usuario;
    }
}

if (btnSalir) {
    btnSalir.addEventListener("click", function () {
        localStorage.removeItem("usuarioLogueado");
        window.location.href = "login.html";
    });
}