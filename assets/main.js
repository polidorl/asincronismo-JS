// Enlaces de los proyectos realizados
const projects = [
    {
        title: "Lista de Tareas",
        description: "Una aplicación de lista de tareas interactiva construida con HTML, CSS y JavaScript.",
        image: "https://polidorl.github.io/Proyecto-Lista-de-Tareas/imagenes/listaTarea.png", // Enlace a la imagen
        link: "https://polidorl.github.io/Proyecto-Lista-de-Tareas/" // Enlace al proyecto
    },
    {
        title: "Sitio Web Yoga principiantes",
        description: "Un sitio web personal completamente responsive construido con HTML, CSS y Boostrap.",
        image: "https://polidorl.github.io/Bootstrap-web-page-for-yoga/img/yoga-about-1.jpg",
        link: "https://polidorl.github.io/Bootstrap-web-page-for-yoga/"
    },
    {
        title: "Results summary component  solution",
        description: "Objetivo principal demostrar el uso del frameworks de Tailwind-CSS al re-crear un diseño proporcionado.",
        image: "https://polidorl.github.io/tailwind-project/design/desktop-design.jpg",
        link: "https://polidorl.github.io/tailwind-project/"
    },
    {
        title: "Responsive Design Mobile First",
        description: "Tecnologías utilizadas:HTML y CSS puro, y garantizar que la página sea responsive.",
        image: "https://polidorl.github.io/Responsive-Design-Mobile-First/assets/img/proyect0-batatabit.png",
        link: "https://polidorl.github.io/Responsive-Design-Mobile-First/"
    }
];

// Habilidades
const skills = [
    { name: "HTML", description: "Estructuro contenido web de manera semántica y optimizada." },
    { name: "CSS", description: "Creo diseños responsivos y modernos utilizando Flexbox, Grid y animaciones." },
    { name: "JavaScript", description: "Desarrollo funcionalidades interactivas y dinámicas, integrando APIs y manipulando el DOM." },
    { name: "Boostrap", description: "Combino Bootstrap con CSS puro para crear diseños web modernos y adaptables." },
    { name: "Tailwind CSS", description: "Diseño interfaces de usuario eficientes y responsivas utilizando utilidades de Tailwind." },
    { name: "Git y GitHub", description: "Manejo control de versiones en proyectos colaborativos, utilizando ramas y realizando merges." }
];

// Elementos del DOM
const projectsContent = document.getElementById('projects-content');
const skillsContent = document.getElementById('skills-content');


// Función para cargar proyectos
function loadProjects() {
    let view = `
        ${projects.map(project => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover object-center">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">${project.title}</h3>
                </div>
                <p class="mt-2 text-sm text-gray-500">${project.description}</p>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
                   class="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500">
                   Ver proyecto
                </a>
            </div>
        `).join('')}
    `;
    projectsContent.innerHTML = view;
}


// Función para cargar habilidades
function loadSkills() {
    let view = `
        ${skills.map(skill => `
            <div class="bg-white p-4 shadow rounded-lg">
                <h3 class="text-lg font-bold text-gray-900">${skill.name}</h3>
                <p class="text-sm text-gray-600"> ${skill.description}</p>
            </div>
        `).join('')}
    `;
    skillsContent.innerHTML = view;
}

// Cargar contenido al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
});