// Obtener todos los elementos <li> del menú de navegación
const navItems = document.querySelectorAll('header nav ul li');

// Iterar sobre cada elemento <li>
navItems.forEach((item) => {
  // Agregar un evento de clic a cada elemento <li>
  item.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    // Obtener el enlace dentro del elemento <li>
    const link = item.querySelector('a');

    // Obtener el valor del atributo href del enlace
    const targetId = link.getAttribute('href');

    // Obtener el elemento objetivo en el contenido principal según su ID
    const targetElement = document.querySelector(targetId);

    // Desplazarse suavemente hasta el elemento objetivo
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
