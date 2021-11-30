class InputHandler {
    constructor() {
        window.addEventListener('keydown', e => {
            e.preventDefault();
            if (e.key === 'ArrowUp') {
                if (player.y === player.groundLevel) {
                    player.jumping = true;
                }

                return;
            }
            if (!keyPresses.includes(e.key)) keyPresses.push(e.key);
        })
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowUp') {
                return;
            }
            keyPresses.splice(keyPresses.findIndex(el => el === e.key), 1);
        })
        console.log(keyPresses);
    }
}