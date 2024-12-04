// Detectar la página actual
const currentPage = window.location.pathname.split('/').pop();

// Seleccionar todos los enlaces del menú
const navLinks = document.querySelectorAll('.nav-link');

// Recorrer los enlaces y asignar la clase 'active' si coincide con la página actual
navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop(); // Solo la parte final del enlace
    if (linkPath === currentPage || (linkPath === '' && currentPage === 'index.html')) {
        link.classList.add('active'); // Agregar la clase 'active' si coincide
    } else {
        link.classList.remove('active'); // Eliminar la clase 'active' si no coincide
    }
});
