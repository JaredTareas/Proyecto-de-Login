// Busca el formulario del login por su id
const formLogin = document.getElementById("formLogin");

// Revisa si el formulario existe en la página
if (formLogin) {

    // Detecta cuando el usuario intenta enviar el formulario
    formLogin.addEventListener("submit", function (event) {

        // Evita que la página se recargue automáticamente
        event.preventDefault();

        // Obtiene el correo escrito por el usuario y quita espacios
        const correo = document.getElementById("correo").value.trim();

        // Obtiene la contraseña escrita y quita espacios
        const password = document.getElementById("password").value.trim();

        // Busca el mensaje de error del login
        const mensajeError = document.getElementById("mensajeError");

        // Valida que el correo y la contraseña sean correctos
        if (validarCorreo(correo) && validarPassword(password)) {

            // Guarda el correo en localStorage como sesión simulada
            localStorage.setItem("usuarioLogueado", correo);

            // Manda al usuario a la pantalla principal
            window.location.href = "index.html";

        } else {

            // Muestra el mensaje de error quitando la clase d-none
            mensajeError.classList.remove("d-none");

            // Cambia el texto del mensaje de error
            mensajeError.textContent = "Ingresa un correo válido y una contraseña segura.";
        }
    });
}



// Busca dónde se mostrará el nombre o correo del usuario
const nombreUsuario = document.getElementById("nombreUsuario");

// Busca el botón para salir del sistema
const btnSalir = document.getElementById("btnSalir");

// Revisa si existe el elemento nombreUsuario en la página
if (nombreUsuario) {

    // Obtiene el usuario guardado en localStorage
    const usuario = localStorage.getItem("usuarioLogueado");

    // Si no hay usuario guardado, lo manda al login
    if (!usuario) {

        // Redirige a login.html
        window.location.href = "login.html";

    } else {

        // Muestra el correo del usuario en la navbar
        nombreUsuario.textContent = usuario;
    }
}

// Revisa si existe el botón de salir
if (btnSalir) {

    // Detecta cuando el usuario da clic en salir
    btnSalir.addEventListener("click", function () {

        // Borra la sesión simulada del localStorage
        localStorage.removeItem("usuarioLogueado");

        // Regresa al usuario al login
        window.location.href = "login.html";
    });
}