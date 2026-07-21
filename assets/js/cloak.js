
const DEFAULT_TITLE = "Bunnies";
const DEFAULT_FAVICON = "/assets/images/icon.png"; 


function setTab(title, favicon) {
    document.title = title;

    let icon = document.querySelector("link[rel*='icon']");
    if (!icon) {
        icon = document.createElement("link");
        icon.rel = "icon";
        document.head.appendChild(icon);
    }

    icon.href = favicon;

    
    localStorage.setItem("tabTitle", title);
    localStorage.setItem("tabIcon", favicon);
}


function resetTab() {
    localStorage.removeItem("tabTitle");
    localStorage.removeItem("tabIcon");

    document.title = DEFAULT_TITLE;

    let icon = document.querySelector("link[rel*='icon']");
    if (!icon) {
        icon = document.createElement("link");
        icon.rel = "icon";
        document.head.appendChild(icon);
    }

    icon.href = DEFAULT_FAVICON;
}


window.addEventListener("DOMContentLoaded", () => {
    const savedTitle = localStorage.getItem("tabTitle");
    const savedIcon = localStorage.getItem("tabIcon");

    if (savedTitle) document.title = savedTitle;

    let icon = document.querySelector("link[rel*='icon']");
    if (!icon) {
        icon = document.createElement("link");
        icon.rel = "icon";
        document.head.appendChild(icon);
    }

    icon.href = savedIcon || DEFAULT_FAVICON;
});