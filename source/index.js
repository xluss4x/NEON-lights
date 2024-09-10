const userInput = document.getElementById("user-input");
const fontStyle = document.getElementById("font-style");
const colorSelector = document.getElementById("color-selector");
const fontSize = document.getElementById("font-size");
const neonText = document.querySelector(".neonText");
const canvas = document.querySelector(".image");

function generateText() {
    const text = userInput.value;
    const font = fontStyle.value;
    const color = colorSelector.value;
    const size = fontSize.value;
    neonText.textContent = text;
    neonText.style.fontFamily = font;
    neonText.style.color = color;
    neonText.style.fontSize = `${size}px`;
}
function generateImages() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(neonText, 0, 0);
}

