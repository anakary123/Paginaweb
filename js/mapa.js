  // Dirección predeterminada (Calle Alonso Cano 44-46, Madrid)
  const defaultAddress = "Calle Alonso Cano 44-46, Madrid";

  // Crear un icono personalizado
  const clientIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',  // URL del icono
      iconSize: [25, 41], // Tamaño del icono
      iconAnchor: [12, 41], // Anclaje del icono
      popupAnchor: [1, -34], // Donde aparece el texto
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra del icono
      shadowSize: [41, 41], // Tamaño de la sombra
  });

  // Función para obtener coordenadas de una dirección usando la API de OpenStreetMap
  function getCoordinatesFromAddress(address, callback) {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
          .then(response => response.json())
          .then(data => {
              if (data && data[0]) {
                  const lat = data[0].lat;
                  const lon = data[0].lon;
                  callback(lat, lon);
              } else {
                  console.error("Dirección no encontrada.");
              }
          })
          .catch(error => console.error("Error al geocodificar la dirección:", error));
  }

  // Función para obtener la ubicación del cliente
  function getClientLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;

              // Actualizar el iframe con la ubicación del cliente
              const iframeSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.01}%2C${lat - 0.01}%2C${lon + 0.01}%2C${lat + 0.01}&layer=mapnik`;
              document.getElementById('mapFrame').src = iframeSrc;

              // Crear un mapa con Leaflet
              const map = L.map('mapFrame').setView([lat, lon], 15); // Ajusta el zoom y la posición inicial

              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: '© OpenStreetMap contributors',
                  maxZoom: 19,
              }).addTo(map);

              // Añadir un marcador con el icono personalizado
              L.marker([lat, lon], { icon: clientIcon })
                  .addTo(map)
                  .bindPopup('Ubicación del cliente')
                  .openPopup();

          }, error => {
              console.error("Error obteniendo la ubicación del cliente:", error);
              // Si no se obtiene la ubicación del cliente, mostrar la ubicación predeterminada
              showDefaultLocation();
          });
      } else {
          console.error("Geolocalización no soportada.");
          // Si no hay soporte de geolocalización, mostrar la ubicación predeterminada
          showDefaultLocation();
      }
  }

  // Función para mostrar la ubicación predeterminada
  function showDefaultLocation() {
      // Obtener coordenadas de la dirección predeterminada (Calle Alonso Cano 44-46, Madrid)
      getCoordinatesFromAddress(defaultAddress, (lat, lon) => {
          // Actualizar el iframe con la ubicación predeterminada
          const iframeSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.01}%2C${lat - 0.01}%2C${lon + 0.01}%2C${lat + 0.01}&layer=mapnik`;
          document.getElementById('mapFrame').src = iframeSrc;

          // Crear un mapa con Leaflet
          const map = L.map('mapFrame').setView([lat, lon], 15); // Ajusta el zoom y la posición inicial

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© OpenStreetMap contributors',
              maxZoom: 19,
          }).addTo(map);

          // Añadir un marcador con el icono personalizado
          L.marker([lat, lon], { icon: clientIcon })
              .addTo(map)
              .bindPopup('Ubicación predeterminada: Calle Alonso Cano 44-46')
              .openPopup();
      });
  }

  // Intentar obtener la ubicación del cliente al cargar la página
  getClientLocation();
