
// Echoes in the Hall
// Part 1A

console.log("Echoes in the Hall loaded!");

const playButton = document.getElementById("playButton");
const menu = document.getElementById("menu");
const hud = document.getElementById("hud");
const loading = document.getElementById("loading");

playButton.addEventListener("click", () => {
    menu.style.display = "none";
    hud.style.display = "block";
    loading.textContent = "Entering the school...";
});
