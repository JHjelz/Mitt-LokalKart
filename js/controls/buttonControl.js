// MITT-LOKALKART/js/controls/buttonControl.js

import { createDiv } from "../ui/createDiv.js"

import { createLeftMenyControl } from "./leftMenyControl.js"

export function createLeftButtonContainer(map) {
    // Create div
    const container = createDiv({
        id: "leftButtonContainer",
        className: "button-container"
    });

    // Add buttons
    createLeftMenyControl(container);

    // Add container as leaflet control
    const ButtonControl = L.Control.extend({
        onAdd: function() {
            return container;
        }
    });

    const control = new ButtonControl({
        position: "topleft"
    });
    
    map.addControl(control);
}
