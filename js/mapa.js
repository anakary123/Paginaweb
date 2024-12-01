function obtenerUbicacion() {
    // Verificar si el navegador soporta geolocalización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Llamar a la función para mostrar el mapa con la ubicación del usuario
            mostrarMapa(lat, lng);
        }, function (error) {
            // Si ocurre un error (usuario no otorga permisos, por ejemplo), mostrar ubicación predeterminada
            mostrarMapa(40.4167754, -3.7037906); // Madrid, España
        });
    } else {
        // Si el navegador no soporta geolocalización, mostrar ubicación predeterminada
        mostrarMapa(40.4167754, -3.7037906); // Madrid, España
    }
}
// Función para mostrar el mapa con las coordenadas proporcionadas
function mostrarMapa(lat, lng) {
    // Obtener el iframe
    const iframe = document.getElementById("mapa-iframe");

    // Generar la URL del mapa con las coordenadas obtenidas
    const mapaUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24357.019295242535!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287b6b64fce1%3A0x13612a317c9129b!2sMadrid!5e0!3m2!1ses!2ses!4v1675253580152!5m2!1ses!2ses`;

    // Establecer el nuevo src del iframe
    iframe.src = mapaUrl;

}

// Llamar a la función al cargar la página
obtenerUbicacion();