// MITT-LOKALKART/js/ui/createDiv.js

export function createDiv({
    id="",
    className=""
} = {}) {
    const div = document.createElement("div");

    if (id) {
        div.id = id;
    }

    if (className) {
        div.classList.add(...className.split(" "));
    }

    return div;
}
