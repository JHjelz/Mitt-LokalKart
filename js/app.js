// MITT-LOKALKART/js/app.js

// Imports
import { initMap } from "./map/map.js"
import { createLeftButtonContainer } from "./controls/buttonControl.js"

// Start appen
document.addEventListener("DOMContentLoaded", () => {

    console.log("Mitt lokalkart starter...");
    
    const map = initMap();
    
    createLeftButtonContainer(map);
    
    registerServiceWorker();
})

// Registrer service-worker
function registerServiceWorker(){
    if ("serviceWorker" in navigator){
        window.addEventListener("load", () => {
            navigator.serviceWorker
            .register("./js/service-worker.js")
            .then(() => {
                console.log("Service-Worker registrert");
            })
            .catch(err => {
                console.error("Service-Worker feil:", err);
            });
        });
    }
}
