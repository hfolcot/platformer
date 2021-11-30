class Player {
    constructor(x, y, width, height) {
        this.x = x,
            this.y = y,
            this.width = width,
            this.height = height,
            this.xSpeed = 5,
            this.ySpeed = 1,
            this.jumping = false,
            this.ySpeed = 0,
            this.groundLevel = canvas.height - this.height - 100 //Temp status - replace with object collision for ground/obstacles
    }

    update() {
        console.log(this.jumping);
        if (keyPresses.includes('ArrowLeft')) {
            this.x -= this.xSpeed;
        }
        if (keyPresses.includes('ArrowRight')) {
            this.x += this.xSpeed;
        }
        // player currently bounces a few times when jump button pressed while player in air
        if (this.jumping && this.y === this.groundLevel) {
            this.ySpeed = -20;
            this.jumping = false;
        }
        this.y += this.ySpeed;
        this.ySpeed += gravity;
        if (this.y > this.groundLevel) {
            this.y = this.groundLevel;
            this.ySpeed = 0;
            this.jumping = false;
        }


    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}