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


// Obtener elementos del DOM
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Configurar índice de imagen actual
let currentIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
    const images = sliderContainer.querySelectorAll('img');
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Función para avanzar a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex + 1) % 5;
    showImage(currentIndex);
}

// Función para retroceder a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + 5) % 5;
    showImage(currentIndex);
}

// Agregar eventos a los botones de flecha
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);


window.addEventListener('scroll', function () {
  var whatsappButton = document.querySelector('.whatsapp-button');
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 100) {
    whatsappButton.style.bottom = '70px';
  } else {
    whatsappButton.style.bottom = '20px';
  }
});