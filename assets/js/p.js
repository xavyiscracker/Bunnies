const messages = [
    "Welcome to Bunnies!",
    "we love bunnies",
    "im gay",
    "made with love <3",
    "big guy"
];

const p = document.getElementById("randomText");

function changeText() {
    let newText;

    do {
        newText = messages[Math.floor(Math.random() * messages.length)];
    } while (newText === p.textContent && messages.length > 1);

    p.textContent = newText;
}

changeText();

p.addEventListener("click", changeText);