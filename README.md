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
* **JavaScript (Vanilla JS):** para la lógica de validación, manejo de expresiones regulares, persistencia de datos y control dinámico del DOM.
* **Bootstrap 5:** framework utilizado como base exclusiva de diseño para la maquetación responsiva, componentes de navegación (Navbar, Offcanvas), contenedores colapsables (Accordion), alertas y ventanas emergentes (Modals).
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

Esto permite simular el acceso a un sistema sin usar base de datos ni backend. como extra adicional se comento el codigo para que mi compañero entienda mejor lo que se esta realizando en caso de perderse

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


### Evidencia del avance numero 1


<p align="center"> <img width="850" alt="Pantalla de login" src="https://github.com/user-attachments/assets/e10926dd-306f-4da0-a7b8-030de8a47506" /> </p>

<p align="center"> <img width="850" alt="Pantalla principal del sistema" src="https://github.com/user-attachments/assets/46dd17fa-5876-4709-8134-710487596762" /> </p>

<p align="center"> <img width="350" alt="Menú de usuario con opción salir" src="https://github.com/user-attachments/assets/8108e139-db81-4a38-9868-8e3a49136808" /> </p>


# Parte 2: Módulo de Captura (Leonardo Fuentes López)

## Descripción de mi parte del proyecto
Mi participación consistió en desarrollar la interfaz interna del sistema (`index.html`) una vez que el usuario inicia sesión de manera exitosa. Me encargué de implementar la navegación lateral, construir los formularios de captura y conectar las funciones de la librería `utileria.js` para procesar los datos ingresados de forma dinámica sin que la página se recargue.

---

## Archivos trabajados en esta etapa
Para desarrollar estas funcionalidades, los archivos involucrados fueron:

```text
index.html (Modificación para agregar Sidebar, Formularios y Modal)
js/captura.js (Archivo nuevo creado para la lógica de esta sección)
js/utileria.js (Uso de las funciones matemáticas y de validación)
```

---

## Menú Lateral (Sidebar)
Se implementó un menú lateral interactivo utilizando el componente **Offcanvas** de Bootstrap para no saturar la pantalla principal.
* Se despliega al dar clic en el botón hamburguesa (`☰`) situado en la barra de navegación superior.
* En su interior, contiene un menú en formato acordeón. Al desplegar la opción **Usuarios** y seleccionar el submenú **Captura**, el menú lateral se cierra automáticamente y hace visibles los formularios en el área principal de la página.

---

## Formularios de Captura
Se agregaron dos formularios que inicialmente están ocultos y aparecen dinámicamente mediante JavaScript:

### 1. Captura de Usuarios
Solicita el nombre, correo electrónico y contraseña. Al intentar guardar la información:
* Se previene la recarga del formulario utilizando `event.preventDefault()`.
* Se invoca la función `validarCorreo()` de la librería para verificar el formato.
* Se invoca la función `validarPassword()` para asegurar que cumpla con los requisitos mínimos de seguridad.
* El sistema muestra alertas interactivas (Bootstrap Alerts) indicando si hubo un error o si el usuario se guardó correctamente.

### 2. Captura de Alumnos
Solicita el nombre, número de control y fecha de nacimiento del estudiante. Al dar clic en "Verificar Alumno":
* Se valida mediante una expresión regular (`/^\d{6}$/`) que el **número de control tenga exactamente 6 dígitos numéricos**.
* Se utiliza la función `calcularEdad(fechaNacimiento)` para obtener los años cumplidos del alumno a partir de la fecha actual.
* Se verifica con la función `esMayorDeEdad(fechaNacimiento)` si el estudiante supera la mayoría de edad para poder mostrar el resultado.

---

## Modal Dinámico de Resultados
Cuando se procesa el formulario de alumnos exitosamente, el resultado se muestra en una ventana emergente de tipo **Modal** (Bootstrap).
* **Si el alumno es mayor de edad:** El modal despliega un icono de confirmación (✅), un texto destacado en color verde y detalla la edad exacta calculada.
* **Si el alumno es menor de edad:** El modal despliega un icono de advertencia (❌), un mensaje en color rojo y especifica los años del estudiante.

---

## Flujo de funcionamiento de mi parte

El ciclo de la interfaz interna funciona de la siguiente manera:

```text
1. El usuario visualiza la tarjeta de bienvenida en index.html.
2. Da clic en el botón ☰ para abrir el panel lateral.
3. Despliega la categoría "Usuarios" y selecciona "Captura".
4. Los formularios se hacen visibles en la pantalla y el panel lateral se oculta.
5. El usuario captura los datos de un alumno y envía el formulario.
6. js/captura.js detiene la recarga y procesa las validaciones.
7. Se activa y muestra el Modal con el resultado del cálculo de edad (Mayor/Menor).
```
## Participación en el proyecto

Mi participación se enfocó en:

* Implementar el menú lateral (sidebar) interactivo en `index.html`.
* Crear los formularios dinámicos para la captura de usuarios y alumnos.
* Desarrollar el archivo `js/captura.js` para manejar los eventos sin recargar la página.
* Validar que el número de control tenga exactamente 6 dígitos.
* Integrar las funciones de `utileria.js` para validar datos y calcular la edad.
* Diseñar e implementar el Modal para mostrar si el alumno es mayor o menor de edad.
* Controlar la visibilidad de las secciones (ocultar menú y mostrar formularios de captura).

### Evidencia del avance numero 2
<p align="center"> <img width="850" alt="Pantalla de login" src="https://github.com/user-attachments/assets/4b3a5e1f-1225-432d-a2a6-ef912830b66d" /> </p>

<p align="center"> <img width="850" alt="Pantalla principal y menu" src="https://github.com/user-attachments/assets/eefdfa26-7308-4f79-a8ea-a986c6b8185b" /> </p>

<p align="center"> <img width="850" alt="Captura de usuario y alumnos" src="https://github.com/user-attachments/assets/d3b6ccba-f7da-4235-8c0b-5a9f63635d45" /> </p>
