/**
 * Valida que un correo electrónico tenga un formato correcto.
 * @param {string} correo - Correo electrónico a validar.
 * @returns {boolean} Retorna true si el correo es válido, false si no lo es.
 */
function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

/**
 * Valida que un texto contenga solo letras mayúsculas, minúsculas y vocales acentuadas.
 * @param {string} texto - Texto a validar.
 * @returns {boolean} Retorna true si solo contiene letras, false si contiene números o símbolos.
 */
function soloLetras(texto) {
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expresion.test(texto);
}

/**
 * Valida que un número no exceda una longitud máxima.
 * @param {number|string} numero - Número a validar.
 * @param {number} maxLongitud - Cantidad máxima de dígitos permitidos.
 * @returns {boolean} Retorna true si la longitud es válida, false si se pasa.
 */
function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}

/**
 * Calcula la edad de una persona a partir de su fecha de nacimiento.
 * @param {string} fechaNacimiento - Fecha de nacimiento en formato YYYY-MM-DD.
 * @returns {number} Retorna la edad calculada como número entero.
 */
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

/**
 * Valida si una persona es mayor de edad.
 * @param {string} fechaNacimiento - Fecha de nacimiento en formato YYYY-MM-DD.
 * @returns {boolean} Retorna true si tiene 18 años o más, false si es menor.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Valida que una contraseña sea segura.
 * Debe contener al menos una mayúscula, una minúscula, un número,
 * un carácter especial y mínimo 8 caracteres.
 * @param {string} password - Contraseña a validar.
 * @returns {boolean} Retorna true si la contraseña es válida, false si no cumple.
 */
function validarPassword(password) {
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return expresion.test(password);
}

/**
 * Genera un nombre de usuario usando el nombre y el apellido de una persona.
 * Convierte el texto a minúsculas y une ambos datos con un punto.
 * @param {string} nombre - Nombre de la persona.
 * @param {string} apellido - Apellido de la persona.
 * @returns {string} Retorna un nombre de usuario generado.
 */
function generarUsuario(nombre, apellido) {
    const usuario = nombre.trim().toLowerCase() + "." + apellido.trim().toLowerCase();
    return usuario;
}

/**
 * Valida que un código postal tenga exactamente 5 dígitos numéricos.
 * @param {string|number} codigoPostal - Código postal a validar.
 * @returns {boolean} Retorna true si el código postal tiene 5 dígitos, false si no cumple.
 */
function validarCodigoPostal(codigoPostal) {
    const expresion = /^[0-9]{5}$/;
    return expresion.test(codigoPostal);
}