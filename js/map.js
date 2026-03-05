// MITT-LOKALKART/js/map.js

export function initMap(){
  // Opprett kartet
  const map = L.map('map', {zoomControl: false}).setView([60.1659969, 10.2559499], 14);

  // Legger til zoom
  L.control.zoom({position: 'bottomright'}).addTo(map);

  // Legg til bakgrunnskart (OpenStreetMap)
  const osmLayer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; OpenStreetMap contributors'
    }
  );

  osmLayer.addTo(map);
}
