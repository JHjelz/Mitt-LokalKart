// MITT-LOKALKART/js/ui/createButton.js

export function createButton({
    id = "",
    className = "",
    title = "",
    icon = "",
    text = "",
    onClick = null
}  = {}) {
    const button = document.createElement("button");

    if (id) {
        button.id = id;
    }

    if (className) {
        button.className = className;
    }

    if (title) {
        button.title = title;
    }

    if (icon) {
        button.innerHTML = icon;
    } else if (text) {
        button.textContent = text;
    }

    if (typeof onClick === "function") {
        button.addEventListener("click", onClick);
    }

    return button;
}
