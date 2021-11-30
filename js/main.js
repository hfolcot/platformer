const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight > 600 ? 600 : window.innerHeight;
canvas.width = window.innerWidth > 1000 ? 1000 : window.innerWidth;

let lastTime = 0;
let deltaTime = 0;

let gravity = 1;

const keyPresses = [];
const input = new InputHandler();
const player = new Player(50, canvas.height - 200, 50, 100);

const loop = function (timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(0, canvas.height - 100, canvas.width, canvas.height)
    player.update();
    player.draw();
    deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    requestAnimationFrame(loop);
}

loop();