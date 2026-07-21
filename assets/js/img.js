const character = document.getElementById("themeCharacter");

function updateCharacter(){
    const theme = document.documentElement.getAttribute("data-theme");

    const styles = getComputedStyle(document.documentElement);
    let img = styles.getPropertyValue("--character").trim();

    img = img.replace(/url\(["']?/, "").replace(/["']?\)/, "");

    if(theme === "miku" && img){
        character.src = img;
        character.style.display = "block";
    } else {
        character.style.display = "none";
    }
}

updateCharacter();

const observer = new MutationObserver(updateCharacter);
observer.observe(document.documentElement, {
    attributes:true,
    attributeFilter:["data-theme"]
});