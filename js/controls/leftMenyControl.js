// MITT-LOKALKART/js/controls/leftMenyControl.js

import { createButton } from "../ui/createButton.js";

function openMeny() {
    const meny = document.getElementById("meny");
    meny.classList.add("open");

    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;

    meny.style.top = headerHeight + "px";
    meny.style.height = `calc(100% - ${headerHeight}px)`;

    const button = document.getElementById("leftMeny");
    button.style.display = "none";

    document.body.classList.toggle("meny-open");
}

function closeMeny() {
    const meny = document.getElementById("meny");
    meny.classList.remove("open");
}

export function createLeftMenyControl(container) {
    const button = createButton({
        id: "leftMeny",
        className: "meny-button",
        title: "Åpne meny",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h8A1.5 1.5 0 0 0 11 3.5v-2A1.5 1.5 0 0 0 9.5 0zm5.927 2.427A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
        `,
        onClick: openMeny
    });
    
    container.appendChild(button);
}
