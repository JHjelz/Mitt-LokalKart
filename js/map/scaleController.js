// MITT-LOKALKART/js/map/scaleController.js

import  { createDiv } from "../ui/createDiv.js";

// Kontroller for målestokforhold 1:x
const scaleRatio = L.Control.extend({
    onAdd: function(map) {
        
        this._div = createDiv({
            id: "scale-container",
            className: "scale-container leaflet-control"
        });

        this._ratioDiv = createDiv({
            id: "scale-ratio",
            className: "scale-ratio"
        });

        this._div.appendChild(this._ratioDiv);

        this.update();

        map.on("zoomend moveend", this.update.bind(this));
        
        return this._div;
    },
    
    update: function() {
        const map = this._map;

        const center = map.getCenter();
        const point1 = map.latLngToContainerPoint(center);
        const point2 = L.point(point1.x + 100, point1.y);
        
        const latlng2 = map.containerPointToLatLng(point2);
        
        const distance = center.distanceTo(latlng2); // meter per 100px
        const metersPerPixel = distance / 100;
        
        const dpi = 96;
        const inchesPerMeter = 39.37;
        
        const scale = metersPerPixel * dpi * inchesPerMeter;
        
        const ratio = Math.round(scale);

        this._ratioDiv.innerHTML = "1:" + ratio.toLocaleString();
    }
});

export function scaleRatioControl(opts) {
    return new scaleRatio(opts);
}
