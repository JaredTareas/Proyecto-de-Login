// Esperamos a que todo el HTML cargue
document.addEventListener("DOMContentLoaded", function () {
    
    // Obtenemos el botón del menú y el contenedor de los formularios
    const btnCaptura = document.getElementById("btnCaptura");
    const seccionCaptura = document.getElementById("seccionCaptura");
    
    // Obtenemos el sidebar para poder cerrarlo automáticamente
    const sidebarElement = document.getElementById("sidebar");

    if (btnCaptura && seccionCaptura) {
        btnCaptura.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que la página salte hacia arriba

            // Quitamos la clase 'd-none' para que los formularios se hagan visibles
            seccionCaptura.classList.remove("d-none");

            // Cerramos el sidebar automáticamente
            if (sidebarElement) {
                const sidebar = bootstrap.Offcanvas.getInstance(sidebarElement);
                if (sidebar) {
                    sidebar.hide();
                }
            }
        });
    }

    // --- NUEVO CÓDIGO: PASO 6 (Validación de Usuarios) ---
    const formUsuario = document.getElementById("formUsuario");
    const formAlumno = document.getElementById("formAlumno");

    if (formUsuario) {
        formUsuario.addEventListener("submit", function (event) {
            event.preventDefault(); // ESTO EVITA QUE LA PÁGINA SE RECARGUE

            // Obtenemos los valores de los campos
            const nombre = document.getElementById("nombreUser").value.trim();
            const correo = document.getElementById("correoUser").value.trim();
            const password = document.getElementById("passUser").value.trim();
            
            // Obtenemos las cajas de alerta
            const errorDiv = document.getElementById("errorUsuario");
            const exitoDiv = document.getElementById("exitoUsuario");
            
            // Limpiamos mensajes previos
            errorDiv.classList.add("d-none");
            exitoDiv.classList.add("d-none");

            // 1. Validar que no estén vacíos
            if (nombre === "" || correo === "" || password === "") {
                errorDiv.textContent = "Todos los campos son obligatorios.";
                errorDiv.classList.remove("d-none");
                return; // Detiene la ejecución
            }

            // 2. Validar correo usando utileria.js
            if (!validarCorreo(correo)) {
                errorDiv.textContent = "El formato del correo no es válido.";
                errorDiv.classList.remove("d-none");
                return;
            }

            // 3. Validar contraseña usando utileria.js
            if (!validarPassword(password)) {
                errorDiv.textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, minúscula, número y símbolo.";
                errorDiv.classList.remove("d-none");
                return;
            }

            // Si todo está correcto
            exitoDiv.textContent = "Usuario guardado correctamente.";
            exitoDiv.classList.remove("d-none");
            formUsuario.reset(); // Limpia los campos del formulario
        });
    }

    // Evitamos temporalmente que el de alumnos recargue la página 
    if (formAlumno) {
        formAlumno.addEventListener("submit", function (event) {
            event.preventDefault(); 
        });
    }
});