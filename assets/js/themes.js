const select = document.getElementById("themeSelect");

const savedTheme = localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute("data-theme", savedTheme);

select.value = savedTheme;

select.onchange = () => {
    localStorage.setItem("theme", select.value);
    document.documentElement.setAttribute("data-theme", select.value);
};