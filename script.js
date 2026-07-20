playButton.addEventListener("click", () => {
    menu.style.display = "none";
    hud.style.display = "block";
    loading.style.display = "none";

    startSchool();
});
// Echoes in the Hall
// Part 1B - 3D Scene Setup

import * as THREE from "three";

let scene;
let camera;
let renderer;

function startSchool() {

    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    // Create camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    // Create renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    document.body.appendChild(renderer.domElement);

    // Camera position
    camera.position.set(0, 2, 5);

    // Add light
    const light = new THREE.AmbientLight(
        0xffffff,
        0.5
    );

    scene.add(light);

    // Create floor
    const floorGeometry = new THREE.PlaneGeometry(
        20,
        20
    );

    const floorMaterial = new THREE.MeshBasicMaterial({
        color: 0x222222
    });

    const floor = new THREE.Mesh(
        floorGeometry,
        floorMaterial
    );

    floor.rotation.x = -Math.PI / 2;

    scene.add(floor);

    animate();
}


// Game loop
function animate() {

    requestAnimationFrame(animate);

    renderer.render(
        scene,
        camera
    );
}
// Echoes in the Hall
// Part 1C - Start Game Connection

playButton.addEventListener("click", () => {

    menu.style.display = "none";
    hud.style.display = "block";
    loading.style.display = "none";

    startSchool();

});
