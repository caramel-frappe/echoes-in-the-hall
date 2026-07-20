
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
// Part 2A - Game Setup

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

let player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    speed: 5
};

let keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
});

function updatePlayer() {
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;
}

function drawPlayer() {
    ctx.fillStyle = "white";
    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updatePlayer();
    drawPlayer();

    requestAnimationFrame(gameLoop);
}

gameLoop();
