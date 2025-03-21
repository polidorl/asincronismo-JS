
Este proyecto demuestra la implementación de técnicas asíncronas en JavaScript para cargar dinámicamente un portafolio personal.

---

## Contenido


- [Técnologías utilizadas](#Técnologías-utilizadas) 
- [Descripción general](#Descripción-general)
  - [Objetivo](#Objetivo)
  - [Resultado](#Resultado)
  - [Screenshot](#screenshot)
- [Que aprendí](#Que-aprendí)
- [Datos de los proyectos y habilidades](#Datos-de-los-proyectos-y-habilidades)
- [Referencias a elementos del DOM](#Referencias-a-elementos-del-DOM)
- [Función `loadProjects`](#Función-`loadProjects`)
- [Función `loadSkills`](#Función-`loadSkills`)
- [Carga inicial de la página](#Carga-inicial-de-la-página)
- [Resumen del flujo del código](#Resumen-del-flujo-del-código)
- [Conclusión](#Conclusión)
  
---

## Técnologías utilizadas:
   - HTML5 Semantico
   - CSS 
   - Tailwind CSS
   - Técnicas asíncronas en JavaScript

## Descripción-general:
En este proyecto, se aplican técnicas *asíncronas de JavaScript* y se construye un portafolio personal interactivo y eficiente.

### Objetivo
El objetivo principal es lograr una carga dinámica de la información, mostrando proyectos, habilidades técnicas y datos de contacto de manera que se priorice la velocidad y la usabilidad.

### Resultado
Un *Portafolio personal* que no solo es rápido y fácil de usar, sino también altamente adaptable. Gracias a su diseño modular, la adición de nuevos proyectos, habilidades o información de contacto se realiza de forma sencilla, facilitando el mantenimiento y la actualización del sitio.

### Screenshot del resultado:
![Alt text](assets/portafolio-personal.png)

---

#### Que aprendí : A continuación muestro un desglose detallado y explicativo del código JavaScript utilizado.

### 1. **Datos de los proyectos y habilidades**

#### a. **Arreglo `projects`**
El arreglo `projects` contiene objetos que representan diferentes proyectos. Cada objeto tiene las siguientes propiedades:
- **`title`**: El nombre del proyecto.
- **`description`**: Una breve descripción del proyecto.
- **`image`**: La URL de la imagen asociada al proyecto.
- **`link`**: La URL del proyecto (enlace para ver el proyecto).

Ejemplo:
```javascript
const projects = [
    {
        title: "Lista de Tareas",
        description: "Una aplicación de lista de tareas interactiva construida con HTML, CSS y JavaScript.",
        image: "https://polidorl.github.io/Proyecto-Lista-de-Tareas/imagenes/listaTarea.png",
        link: "https://polidorl.github.io/Proyecto-Lista-de-Tareas/"
    },
    // Más proyectos...
];
```

#### b. **Arreglo `skills`**
El arreglo `skills` contiene objetos que representan diferentes habilidades. Cada objeto tiene las siguientes propiedades:
- **`name`**: El nombre de la habilidad.
- **`description`**: Una breve descripción de la habilidad.

Ejemplo:
```javascript
const skills = [
    { name: "HTML", description: "Estructuro contenido web de manera semántica y optimizada." },
    // Más habilidades...
];
```

---

### 2. **Referencias a elementos del DOM**

El código obtiene referencias a dos elementos del DOM:
- **`projectsContent`**: El contenedor donde se mostrarán los proyectos.
- **`skillsContent`**: El contenedor donde se mostrarán las habilidades.

```javascript
const projectsContent = document.getElementById('projects-content');
const skillsContent = document.getElementById('skills-content');
```

Estos elementos existen en el HTML y tienen los `id` correspondientes (`projects-content` y `skills-content`).

---

### 3. **Función `loadProjects`**

Esta función se encarga de generar el HTML para mostrar los proyectos y luego insertarlo en el DOM.

#### a. **Generación del HTML**
- Se utiliza el método `map` para recorrer el arreglo `projects` y generar una cadena de texto (`view`) que contiene el HTML de cada proyecto.
- Cada proyecto se representa como un `div` con una imagen, un título, una descripción y un enlace para ver el proyecto.

Ejemplo de HTML generado:
```html
<div class="group relative">
    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="https://polidorl.github.io/Proyecto-Lista-de-Tareas/imagenes/listaTarea.png" alt="Lista de Tareas" class="w-full h-48 object-cover object-center">
    </div>
    <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            Lista de Tareas
        </h3>
    </div>
    <p class="mt-2 text-sm text-gray-500">Una aplicación de lista de tareas interactiva construida con HTML, CSS y JavaScript.</p>
    <a href="https://polidorl.github.io/Proyecto-Lista-de-Tareas/" target="_blank" class="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500">Ver proyecto</a>
</div>
```

#### b. **Inserción en el DOM**
- El HTML generado se asigna al `innerHTML` del contenedor `projectsContent`.

```javascript
projectsContent.innerHTML = view;
```

---

### 4. **Función `loadSkills`**

Esta función es similar a `loadProjects`, pero se encarga de generar el HTML para mostrar las habilidades.

#### a. **Generación del HTML**
- Se utiliza el método `map` para recorrer el arreglo `skills` y generar una cadena de texto (`view`) que contiene el HTML de cada habilidad.
- Cada habilidad se representa como un `div` con un nombre y una descripción.

Ejemplo de HTML generado:
```html
<div class="bg-white p-4 shadow rounded-lg">
    <h3 class="text-lg font-bold text-gray-900">HTML</h3>
    <p class="text-sm text-gray-600">Estructuro contenido web de manera semántica y optimizada para SEO.</p>
</div>
```

#### b. **Inserción en el DOM**
- El HTML generado se asigna al `innerHTML` del contenedor `skillsContent`.

```javascript
skillsContent.innerHTML = view;
```

---

### 5. **Carga inicial de la página**

El código utiliza el evento `DOMContentLoaded` para asegurarse de que las funciones `loadProjects` y `loadSkills` se ejecuten solo cuando el DOM esté completamente cargado.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
});
```

Esto garantiza que los proyectos y habilidades se carguen dinámicamente en la página una vez que el HTML esté listo.

---

### 6. **Resumen del flujo del código**

1. **Definición de datos**:
   - Se definen los arreglos `projects` y `skills` con la información de los proyectos y habilidades.

2. **Referencias al DOM**:
   - Se obtienen referencias a los contenedores donde se mostrarán los proyectos y habilidades.

3. **Generación de HTML**:
   - Las funciones `loadProjects` y `loadSkills` generan el HTML necesario para mostrar los proyectos y habilidades.

4. **Inserción en el DOM**:
   - El HTML generado se inserta en los contenedores correspondientes (`projectsContent` y `skillsContent`).

5. **Carga inicial**:
   - Las funciones se ejecutan cuando el DOM está listo,  asegurando que los datos se carguen dinámicamente en la página.

### 7. ** `id` del Archivo HTML**

El archivo HTML tiene los siguientes elementos para que el codigo funcione:

```html
<div id="projects-content"></div>
<div id="skills-content"></div>
```

Estos son los contenedores donde se insertarán los proyectos y habilidades generados dinámicamente.

---

### 8. **Conclusión**

Con la creación de este proyecto, *Portafolio Personal*, se genera el contenido dinámico de una página web utilizando JavaScript. El diseño es modular, fácil de mantener y se adapta a cambios en los datos, como agregar  proyectos personalizados, sus habilidades y contactos.Este proyecto puede continuar en desarrollo y mejorar aun mas ya sea aplicando  otras tecnicas o tecnicas que requiero para perfeccionarlo aun mas, mejorando su funcionalidad y rendimiento.

**Explicación del Orden:**

1. **Contenido HTML:** Todo el contenido HTML de la página (header, main, footer) se carga inicialmente, proporcionando la estructura base.
2. **Script del Menú Móvil:** El primer script en ejecutarse es el que gestiona el menú móvil, asegurando que esté operativo tan pronto como el DOM esté listo.
3. **Script main.js:** El segundo script en ejecutarse es *main.js*, responsable de cargar dinámicamente el contenido de las secciones de proyectos y habilidades. Al ubicarlo después del script del menú móvil, garantizamos que ambos scripts se ejecuten en el orden adecuado, optimizando la funcionalidad y la experiencia del usuario.
