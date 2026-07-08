# Sistema de Login con Sesión Simulada

## Nombre del proyecto

**Login funcional con HTML, CSS y JavaScript**

## Descripción breve

Este proyecto consiste en un sistema web básico con dos pantallas conectadas: una pantalla de inicio de sesión llamada `login.html` y una pantalla principal llamada `index.html`.

El login valida el correo electrónico y la contraseña usando funciones de la librería `utileria.js`. Si los datos son correctos, se guarda la sesión de forma simulada con `localStorage` y el usuario es redirigido a la pantalla principal del sistema.

---

## Tecnologías utilizadas

Para el desarrollo de esta parte del proyecto se utilizaron las siguientes tecnologías:

* **HTML:** para crear la estructura de las páginas.
* **CSS:** para personalizar el diseño visual.
* **JavaScript:** para validar los datos, guardar la sesión y redirigir al usuario.
* **Bootstrap:** para mejorar el diseño del formulario, botones, tarjeta del login y navbar.

---

## Archivos trabajados

Los archivos principales de esta parte son:

```text
login.html
index.html
css/login.css
js/login.js
js/utileria.js
```

---

## Descripción de mi parte del proyecto 

Mi parte consistió en crear el flujo inicial del sistema:

```text
login.html → index.html → salir del sistema → login.html
```

Esto permite simular el acceso a un sistema sin usar base de datos ni backend.

---

## Pantalla de login

La pantalla `login.html` contiene un formulario con los siguientes campos:

* Correo electrónico.
* Contraseña.
* Botón para entrar al sistema.

El formulario valida que el correo tenga un formato correcto y que la contraseña cumpla con los requisitos de seguridad.

Ejemplo de datos válidos para probar:

```text
Correo: jared@gmail.com
Contraseña: Jared123@
```

---

## Validaciones utilizadas

Para validar los datos se integró la librería `utileria.js`.

Las funciones principales usadas en el login fueron:

```js
validarCorreo(correo)
```

Esta función revisa que el correo tenga un formato válido, por ejemplo:

```text
usuario@correo.com
```

También se usó:

```js
validarPassword(password)
```

Esta función revisa que la contraseña sea segura. Debe tener:

* Mínimo 8 caracteres.
* Una letra mayúscula.
* Una letra minúscula.
* Un número.
* Un carácter especial.

Ejemplo válido:

```text
Jared123@
```

---

## Sesión simulada con localStorage

Cuando el usuario ingresa un correo y una contraseña válidos, el sistema guarda el correo en `localStorage`.

Esto se hizo con la siguiente línea:

```js
localStorage.setItem("usuarioLogueado", correo);
```

Después de guardar la sesión, el usuario es enviado a la página principal:

```js
window.location.href = "index.html";
```

---

## Pantalla principal del sistema

La pantalla `index.html` representa la página principal después de iniciar sesión.

En esta pantalla se muestra una barra superior o navbar. En la parte derecha aparece el correo del usuario que inició sesión.

El usuario se obtiene desde `localStorage` con:

```js
const usuario = localStorage.getItem("usuarioLogueado");
```

Si no existe un usuario guardado, el sistema redirige automáticamente al login:

```js
window.location.href = "login.html";
```

Esto evita que una persona entre directamente a `index.html` sin haber iniciado sesión.

---

## Cierre de sesión

En la navbar se agregó un menú desplegable con la opción:

```text
Salir del sistema
```

Cuando el usuario da clic en esa opción, se elimina la sesión guardada:

```js
localStorage.removeItem("usuarioLogueado");
```

Después, el sistema regresa a la pantalla de login:

```js
window.location.href = "login.html";
```

---

## Flujo de funcionamiento

El funcionamiento de mi parte del proyecto es el siguiente:

```text
1. El usuario abre login.html.
2. Escribe su correo y contraseña.
3. JavaScript valida los datos usando utileria.js.
4. Si los datos son correctos, se guarda el usuario en localStorage.
5. El sistema redirige a index.html.
6. En index.html se muestra el correo del usuario en la navbar.
7. El usuario puede abrir el menú de su nombre/correo.
8. Al seleccionar "Salir del sistema", se borra la sesión.
9. El sistema regresa nuevamente a login.html.
```

---



## Participación en el proyecto

Mi participación se enfocó en:

* Crear la pantalla de login.
* Validar correo y contraseña.
* Integrar la librería `utileria.js`.
* Simular el inicio de sesión con `localStorage`.
* Redirigir al usuario a `index.html`.
* Mostrar el usuario en la navbar.
* Agregar la opción para cerrar sesión.
* Regresar al login al salir del sistema.

---


### evidencia del avance numero 1


<p align="center"> <img width="850" alt="Pantalla de login" src="https://github.com/user-attachments/assets/e10926dd-306f-4da0-a7b8-030de8a47506" /> </p>

<p align="center"> <img width="850" alt="Pantalla principal del sistema" src="https://github.com/user-attachments/assets/46dd17fa-5876-4709-8134-710487596762" /> </p>

<p align="center"> <img width="350" alt="Menú de usuario con opción salir" src="https://github.com/user-attachments/assets/8108e139-db81-4a38-9868-8e3a49136808" /> </p>



