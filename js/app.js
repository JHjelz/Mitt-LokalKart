// MITT-LOKALKART/js/app.js

// Imports
import { initMap } from "./map.js"

// Start appen
document.addEventListener("DOMContentLoaded", () => {

    console.log("Mitt lokalkart starter...");
    
    initMap();
    
    registerServiceWorker();
})

// Registrer service-worker
function registerServiceWorker(){
    if ("serviceWorker" in navigator){
        window.addEventListener("load", () => {
            navigator.serviceWorker
            .register("js/service-worker.js")
            .then(() => {
                console.log("Service-Worker registrert");
            })
            .catch(err => {
                console.error("Service-Worker feil:", err);
            });
        });
    }
}
