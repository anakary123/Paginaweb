// Detectar la página actual
const currentPage = window.location.pathname.split('/').pop();

// Seleccionar todos los enlaces del menú
const navLinks = document.querySelectorAll('.nav-link');

// Recorrer los enlaces y asignar la clase 'active' si coincide con la página actual
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
