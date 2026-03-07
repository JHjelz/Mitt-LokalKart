// MITT-LOKALKART/js/map.js

import { scaleRatioControl } from "./scaleController.js";

export function initMap(){
  // Definer bakgrunnskart
  const topoRaster = L.tileLayer( // Kartverket toporaster
    "https://cache.kartverket.no/v1/wmts/1.0.0/toporaster/default/webmercator/{z}/{y}/{x}.png",
    {
      attribution: '&copy; Kartverket',
      minZoom: 5,
      maxZoom: 18
    }
  );

  const topo = L.tileLayer( // Kartverket topo
    "https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png",
    {
      attribution: '&copy; Kartverket',
      minZoom: 5,
      maxZoom: 18
    }
  );

  const topoGraatone = L.tileLayer( // Kartverket topo gråtone
    "https://cache.kartverket.no/v1/wmts/1.0.0/topograatone/default/webmercator/{z}/{y}/{x}.png",
    {
      attribution: '&copy; Kartverket',
      minZoom: 5,
      maxZoom: 18
    }
  );

  const osmLayer = L.tileLayer( // OpenStreetMap
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18
    }
  );

  // Definer kontroll-panel for kartlag
  const baseLayers = {
    "Kartverket rasterkart": topoRaster,
    "Kartverket topografisk norgeskart": topo,
    "Kartverket topografisk norgeskart gråtone": topoGraatone,
    "OpenStreetMap": osmLayer
  };

  // Opprett kartet
  const map = L.map('map', {
    zoomControl: false,
    layers: [topoRaster]
  }).setView([60.1659969, 10.2559499], 14);

  // Legger til målestokk
  scaleRatioControl({
    position: "bottomleft"
  }).addTo(map);
  
  L.control.scale({
    metric: true,
    imperial: false
  }).addTo(map);

  const scaleEl = document.querySelector(".leaflet-control-scale");
  const container = document.querySelector(".scale-container");
  if (scaleEl && container) container.appendChild(scaleEl);

  // Legger til kartlag
  L.control.layers(baseLayers, null, {
    position: "topright",
    collapsed: true
  }).addTo(map);

  // Legger til zoom
  L.control.zoom({position: 'bottomright'}).addTo(map);
}
